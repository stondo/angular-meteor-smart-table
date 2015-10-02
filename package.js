Package.describe({
  name: 'stondo:angular-meteor-smart-table',
  version: '0.1.0',
  summary: 'Meteor 1.2 package for smart-table: a table/grid for Angularjs, compatible with official angular package (angular:angular)',
  git: '',
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use('angular:angular@1.4.6', 'client');
  api.add_files(['lib/bower_components/angular-smart-table/dist/smart-table.min.js'], 'client');
});
