let ipAddress = '';

module.exports = {
  setIpAddress: function(ip) {
    ipAddress = ip;
  },
  getIpAddress: function() {
    return ipAddress;
  }
};  