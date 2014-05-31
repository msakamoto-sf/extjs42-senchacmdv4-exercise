Ext.define("MyApp.view.sub.FormDemo", {
  extend: 'Ext.form.Panel',
  xtype: 'sub-formdemo',
  frame: true,
  title: 'Form Demo',
  bodyPadding: 10,
  autoScroll:true,
  defaultType: 'textfield',
  defaults : {
    anchor: '100%'
  },
  initComponent: function() {
    this.items = [
    {
      fieldLabel: 'First Name',
      emptyText: 'First Name',
      name: 'first'
    },
    {
      fieldLabel: 'Last Name',
      emptyText: 'Last Name',
      name: 'last'
    },
    {
      fieldLabel: 'Numbers',
      xtype: 'numberfield',
      name: 'numerdemo',
      value: 1,
      minValue: 1,
      maxValue: 125
    },
    {
      fieldLabel: 'Date of Birth',
      xtype: 'datefield',
      name: 'dob',
      maxValue: new Date()
    }];
    this.callParent();
  }
});
