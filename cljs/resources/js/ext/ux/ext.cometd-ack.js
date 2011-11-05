Ext.onReady(function() {
  Ext.ux.cometd.registerExtension('ack', new org.cometd.AckExtension());
});