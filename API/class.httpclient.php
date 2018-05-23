<?php
/**
 * Lib http client
 * @author KhanhDTP 2018-05-09
 */
class HttpClient {

    /**
     * Debug?
     * @param bool $debug Debug flag?
     * @return void
     */
    public static $debug = false;

    /**
     * Parse response headers
     *
     * @param array $headers
     * @return void
     */
    public static function parseHeaderResponseCode($headers)
    {
        $responseCode = null;
        foreach ($headers as $k => $v) {
            if (preg_match( "#HTTP/[0-9\.]+\s+([0-9]+)#", $v, $out)) {
                $responseCode = intval($out[1]);
                break;
            }
        }
        return $responseCode;
    }    

    /**
     * Get header Host string from url string
     * @param string $url API url
     * @return string
     */
    public static function getHdrHost($url) {
        if (preg_match('/https?:\/\/([^\/]+)\/?.*/i', $url, $hHost)) {
            $hHost = $hHost[1];
        }
        // Return
        return $hHost;
    }
    
    /**
     * Get header Date string
     * @return string
     */
    public static function getHdrDate() {
        // Get system's default timezone.
        $tz = strtoupper(date_default_timezone_get());
        // Change default_timezone
        date_default_timezone_set($tzNew = 'ASIA/TOKYO');
        // Get header Date
        $date = date(DateTime::RFC1123, time());
        // Restore default_timezone
        if ($tz != $tzNew) {
            date_default_timezone_set($tz);
        }
        // Return
        return $date;
    }
    
    /**
     * Http request!
     * @param string $url Http request url
     * @param array $options Options
     * @return array
     */
    public function call($url, $options = array()) {
        $response = array(
            'url' => '',
            'response_body' => '',
            'response_header' => array(),
            'stream_context' => array(),
            'response_code' => null,
            
        );
        // Format data
        // +++ http_content
        $content = (array)$options['http_content'];
        $contentEncoding = function_exists($options['content_encoding'])
            ? $options['content_encoding'] : 'http_build_query'
        ;
        // +++ method
        $options['http_method'] = strtoupper($options['http_method']);
        $method = ($isMethodGET = ('GET' === $options['http_method'])) ? 'GET' : 'POST';
        if ($isMethodGET) {
            $url = $url . (empty($content) ? '' : ('?' . http_build_query($content)));
            $content = '';
        } else {
            $content = $contentEncoding($content);
        }
        // +++ headers
        $httpHeader = array_merge(
            array(
                'Host: ' . static::getHdrHost($url),
                'Date: ' . static::getHdrDate(),
                'Content-Type: text/plain',
                'Content-Length: ' . strlen($content)
            ),
            (array)$options['http_header']
        );
        $headers = array();
        $hdrKeys = array();
        foreach ($httpHeader as $idx => $hdr) {
            list($hdr, $hReplace) = (array)$hdr;
            list($hdrKey, $hdrVal) = explode(':', $hdr);
            $hdrKey = strtolower(trim($hdrKey));
            $hdrIdx = count($headers);
            // Case header exists --> replace
            if (!is_null($hdrKeys[$hdrKey]) && !(false === $hReplace)) {
                $hdrIdx = $hdrKeys[$hdrKey];
            }
            $hdrKeys[$hdrKey] = $idx;
            $headers[$hdrIdx] = $hdr;
            // Case: remove header item?
            $hdrVal = trim($hdrVal);
            if ('' === $hdrVal) {
                unset($headers[$hdrIdx]);
            }
        }
        unset($httpHeader, $hdrKeys, $hdrKey, $hdrVal, $idx, $hdr);
        // var_dump($headers); die();
        
        // Stream context options
        $sContext = stream_context_create($response['stream_context'] = array(
            'http' => array(
                'method'  => $method,
                'header'  => implode("\r\n", $headers), // $headers,
                'content' => $content,
                'timeout' => $options['scontext_http_timeout'] ?: 5,
                //'protocol_version' => $options['scontext_http_protocol_version'] ?: 1.1,
                //'request_fulluri' => true,
                //'follow_location' => 0,
                //'ignore_errors' => true,
            ),
            'ssl' => array(
                'verify_peer' => (true === $options['scontext_ssl_verify_peer']) ? true : false,
                'verify_peer_name' => (true === $options['scontext_ssl_verify_peer_name']) ? true : false,
            )
        ));
        
        // Make request
        ob_start();
        $response['response_body'] = file_get_contents($response['url'] = $url, false, $sContext);
        $output = trim(ob_get_clean());
        $response['response_body'] = $response['response_body'] ?: $output;
        $response['response_code'] = static::parseHeaderResponseCode(
            $response['response_code'] = $http_response_header
        );

        // Return
        if (static::$debug) {
            echo '<pre>'; var_dump($response); echo '</pre>';
        }
        return $response;
    }

    /**
     * GET request
     *
     * @return void
     */
    public function get($url, array $options = array()) {
        // Format
        $options = array_replace_recursive($options, array(
            'http_method' => 'GET'
        ));
        return static::call($url, $options);
    }

    /**
     * POST request
     *
     * @return void
     */
    public function post($url, array $options = array()) {
        // Format
        $options = array_replace_recursive($options, array(
            'http_method' => 'POST'
        ));
        return static::call($url, $options);
    }
}