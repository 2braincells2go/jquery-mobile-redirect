/*
 * jQuery Mobile Redirect Plugin v1.0
 * https://github.com/neonowy/jquery-mobile-redirect
 *
 * Copyright 2015 Krzysztof Zbudniewek
 * Released under MIT License
*/
;(function ($, window) {
  var Plugin = function(element, options) {
    this.element = element;
    this.$element = $(element);
    this.options = options;
  }

  Plugin.prototype = {
    defaults: {
      mobileUrl: "http://m.example.com",
      fullUrl: "http://example.com",
      redirectTimeout: 3000,
      cookieExpirationDays: 365,
      maxMobileWidth: 1024,
      maxMobileHeight: 768
    },
    init: function() {
      this.config = $.extend({}, this.defaults, this.options);

      this.setupFullSiteButton();
      this.setupRedirect(); 
    },
    setupFullSiteButton: function() {
      if (this.isOnFullSite()) {
        this.$element.hide(); 
      } else {
        this.$element.on("click", {
          context: this
        }, this.onFullSiteButtonClick)
      }
    },
    setupRedirect: function() {
      var context = this;

      setTimeout(function() {
        context.redirect();
      }, this.config.redirectTimeout);
    },
    isMobile: function() {
      if (this.checkScreen() || this.checkUserAgent())
        return true;

      return false;
    },
    checkScreen: function() {
      if ((screen.width < this.config.maxMobileWidth) &&
          (screen.height < this.config.maxMobileHeight))
        return true;

      return false;
    },
    checkUserAgent: function() {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
        return true;

      return false;
    },
    isOnMobileSite: function() {
      if (window.location.href == this.config.mobileUrl)
        return true;

      return false;
    },
    isOnFullSite: function() {
      if (window.location.href == this.config.fullUrl)
        return true;

      return false;
    },
    hasSelectedFullSite: function() {
      if ($.cookie("fullSite") == "true")
        return true;
      return false;
    },
    onFullSiteButtonClick: function(event) {
      event.data.context.setFullSiteAndRedirect();
    },
    setFullSiteAndRedirect: function() {
      $.cookie("fullSite", "true", { expires: this.config.cookieExpirationDays, path: "/" });

      this.redirectToFullSite();
    },
    redirect: function() {
      if (this.shouldRedirectToMobile()) {
        this.redirectToMobileSite();
      } else if (this.shouldRedirectToFull()) {
        this.redirectToFullSite();
      }
    },
    shouldRedirectToMobile: function() {
      if (this.isMobile() && this.isOnFullSite() && !this.hasSelectedFullSite())
        return true;
        
      return false;
    },
    shouldRedirectToFull: function() {
      if (this.isOnMobileSite() && (!this.isMobile() || this.hasSelectedFullSite()))
        return true;

      return false;
    },
    redirectToFullSite: function() {
      window.location.replace(this.config.fullUrl);
    },
    redirectToMobileSite: function() {
      window.location.replace(this.config.mobileUrl);
    }
  };

  $.fn.mobileRedirect = function(options) {
    return this.each(function() {
      new Plugin(this, options).init();
    });
  };  
}(jQuery, window));
