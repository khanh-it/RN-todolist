/**
 * Define project's global 
 */
const $global = {
    /**
     * Project development environment!
     * @var String
     */
    ENV: 'dev' // dev | live
};

// public?
Object.assign(global, {
    projectGlobal: $global
});

// export
export default $global;
