<?php
//
header('Access-Control-Allow-Origin: *');

$gifsFile = __DIR__ . '/gifs.json';
$gifsJson = '';
if (!file_exists($gifsFile)) {
	//
	require(__DIR__ . '/class.httpclient.php');
	//
	// $url = 'https://www.thuengay.vn/blog/22-buc-anh-gif-danh-trung-tim-den-cua-copywriter-416';
	$url = 'https://forum.vietdesigner.net/threads/tong-hop-nhung-hinh-anh-dong-gif-cuc-vui-cuc-hai-huoc.107330/';
	$httpCli = new HttpClient();
	$res = $httpCli->get($url);
	$html = trim($res['response_body']);
	$pattern = '/<img[^>]*src=[\'"](http[^"]+\.gif)[\'"][^>]*\/?>/';
	preg_match_all($pattern, $html, $imgs);
	$imgs = (array)array_unique($imgs[1]);
	$imgs = array_values($imgs);
	file_put_contents($gifsFile, json_encode($imgs, true));
}
// paging
$gifsJson = json_decode(trim(file_get_contents($gifsFile)), true);
$gifsJson = array_chunk($gifsJson, intval($_GET['limit'] ?: 4));
$gifsJson = (array)$gifsJson[$page = (intval($_GET['page'] ?: 1) - 1)];
/* if ($page >= 2) {
	$gifsJson = array();
} */

// response
header('text/json');
echo json_encode($gifsJson);
