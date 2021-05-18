module.exports = {
  files: 'src/**',
  targets: ['react', 'angular', 'vue', 'svelte', 'webcomponents'],
  options: { },
  mapFile(info) {
    /*
    if (info.target === 'react') {
      info.path =
        'output/next-js/components/' + info.path.replace('.lite.tsx', '.tsx');
    }
    */

    return info;
  },
};
