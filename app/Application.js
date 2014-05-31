Ext.define('MyApp.Application', {
  name: 'MyApp',
  extend: 'Ext.app.Application',
  launch: function() {
    Ext.create('Ext.container.Viewport', {
      layout: 'fit',
      items: [
        {
        title: 'Hello Ext',
        html : 'Hello! Welcome to Ext JS.'
      }
      ]
    });
  }
});
