Ext.define('MyApp.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border',
        'MyApp.view.sub.FormDemo'
    ],

    xtype: 'app-main',

    layout: {
        type: 'border'
    },

    items: [{
        region: 'west',
        xtype: 'panel',
        title: 'west',
        width: 150,
        split: true,
        collapsible: true
    },{
        region: 'center',
        xtype: 'sub-formdemo',
    },{
        region: 'south',
        xtype: 'tabpanel',
        split: true,
        collapsible: true,
        items:[{
            title: 'Center Tab 1'
        }]
    }]
});
