Ext.namespace("Ext.ux");

// Map Cometd's JSON methods to ExtJS's JSON methods
Ext.apply(org.cometd.JSON, {
  toJSON: Ext.encode,
  fromJSON: Ext.decode
});

// ExtJS based cometd adapter
(function() {
  var _c = org.cometd,
      _config = {};


  function LongPollingTransport() {

    var _super = new org.cometd.LongPollingTransport();
    var that = org.cometd.Transport.derive(_super);

    that.xhrSend = function(options) {
      var headers = Ext.apply(options.headers || {}, {
        "Content-Type": "application/json;charset=UTF-8"
      });

      return Ext.Ajax.request({
        url: options.url,
        method: 'POST',
        jsonData: options.body,
        timeout: 60000,

        headers: headers,

        success: function(connection) {
          options.onSuccess(Ext.decode(connection.responseText));
        },

        failure: function(connection) {
          options.onError(connection.statusText, connection);
        }
      });
    };

    return that;
  }

  /*
   _cometd.override({
   // We need to hijack the configure method and stash off the config for ExtJS Ajax timeout setting.
   configure: function(config) {
   _config = config;

   _configure.apply(this, arguments);
   }
   }); */

  Ext.ux.Cometd = function(name) {
    var cometd = new org.cometd.Cometd(name);
    if (window.WebSocket) {
      cometd.registerTransport('websocket', new org.cometd.WebSocketTransport());
    }
    cometd.registerTransport('long-polling', new LongPollingTransport());
    return cometd;
  };

  Ext.ux.cometd = new Ext.ux.Cometd();
})();