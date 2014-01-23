module.exports = function(config) {
  return {
    // copy source to temp, we will minify in place for the dist build
    everything_but_less_to_temp: {
      cwd: '<%= srcDir %>',
      expand: true,
      src: ['**/*', '!**/*.less'],
      dest: '<%= tempDir %>'
    },
    // clobber upstream's default dashboard with our version
    azure_dashboard_to_default: {
      src: '<%= srcDir %>/app/dashboards/azure.json',
      dest: '<%= tempDir %>/app/dashboards/default.json',
    }
  };
};