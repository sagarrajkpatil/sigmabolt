! function (e) {
	function t() {
		var e = window.navigator.userAgent,
			t = e.indexOf("MSIE ");
		if (t > 0) return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
		var a = e.indexOf("Trident/");
		if (a > 0) {
			var s = e.indexOf("rv:");
			return parseInt(e.substring(s + 3, e.indexOf(".", s)), 10)
		}
		var n = e.indexOf("Edge/");
		return n > 0 ? parseInt(e.substring(n + 5, e.indexOf(".", n)), 10) : !1
	}
	var a, s, n = e(window),
		i = e(document),
		o = e("body"),
		r = e("html, body"),
		l = t(),
		d = function () {
			return navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) ? !0 : !1
		},
		c = function () {
			return "ontouchstart" in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
		},
		h = function () {
			var e = window,
				t = "inner";
			return "innerWidth" in window || (t = "client", e = document.documentElement || document.body), e[t + "Width"]
		},
		v = function (t) {
			var a = t.find(".dot-item"),
				s = t.find(".component-descr__li"),
				n = 0,
				i = a.length,
				o = setInterval(function () {
					n >= i && clearInterval(o), e(a[n]).addClass("visible"), e(s[n]).addClass("visible"), n++
				}, 500)
		},
		u = function (e) {
			e.addClass("animated")
		},
		f = function (t) {
			var a = e(t),
				s = a.children(),
				n = 0;
			e.each(s, function () {
				var t = e(this).innerHeight();
				t > n && (n = t)
			}), a.height(n)
		},
		m = function () {
			var e, t = n.width(),
				a = n.height(),
				s = "";
			return e = a > t ? a : t, 1050 > e && (s = "-1024"), 660 > e && (s = "-660"), s
		},
		p = function (e) {
			var t = e.attr("src"),
				a = t.lastIndexOf("/") + 1,
				s = t.substring(0, a);
			return s
		},
		C = function (t) {
			var a = e(t),
				s = m();
			e.each(a, function () {
				var t = e(this),
					a = t.attr("data-name");
				t.attr("src");
				if (!a.length) return !1;
				var n = p(t);
				t.attr("src", n + a + s + ".png")
			})
		};
	C(".js-preload"), n.load(function () {
		e(".h-level").addClass("up")
	}), a = h(), n.resize(function () {
		a = h()
	}), e(".bpf-header--home").length && ((!l || l > 9) && e(".js-component").scroolly([{
		from: "el-top = vp-bottom",
		onCheckIn: function (e) {
			v(e)
		}
	}]), e(".js-animate").scroolly([{
		from: "el-top = vp-bottom",
		onCheckIn: function (e) {
			u(e)
		}
	}]), e(".js-suite-slider").scroolly([{
		from: "el-top = vp-bottom",
		to: "el-bottom = vp-top",
		onCheckIn: function () {
			A()
		},
		onCheckOut: function () {
			clearInterval(j)
		}
	}]));
	var g, w = e(".js-main-menu"),
		x = !1,
		k = function () {
			if (a > 1025) {
				var e = n.scrollTop();
				w.hasClass("landing-menu") ? (e > 200 && !x && (g && clearTimeout(g), w.css({
					transition: "all 0s ease 0s",
					"-webkit-transition": "all 0s ease 0s",
					transform: "translateY(-200px)",
					"-webkit-transform": "translateY(-200px)"
				}), w.addClass("bpf-fixed-menu"), w.width(), w.css({
					transition: "transform 0.15s ease-in-out",
					"-webkit-transition": "transform 0.15s ease-in-out",
					transform: "translateY(0)",
					"-webkit-transform": "translateY(0)"
				}), x = !0), 100 >= e && x && (w.css({
					transform: "translateY(-200px)",
					"-webkit-transform": "translateY(-200px)"
				}), g = setTimeout(function () {
					w.removeClass("bpf-fixed-menu"), w.css({
						transform: "translateY(0)",
						"-webkit-transform": "translateY(0)"
					})
				}, 200), x = !1)) : (e > 0 && !x && (w.addClass("bpf-fixed-menu"), x = !0), 0 == e && x && (w.removeClass("bpf-fixed-menu"), x = !1))
			}
		};
	a > 1025 && k(), n.scroll(function () {
		a > 1025 && k()
	});
	var b = i.width();
	f(".descr-slider__text"), f(".descr-slider__titles"), n.resize(function () {
		var e = i.width();
		e != b && (b = e, setTimeout(function () {
			f(".descr-slider__text"), f(".descr-slider__titles")
		}, 300))
	});
	var j, _ = function (t) {
			var a = e(t).children();
			a.hide(), e(a[0]).show().addClass("ie-current")
		},
		T = function (a, s) {
			var n = t();
			if (n && 10 > n) {
				var i = e(a + ".ie-current");
				if ("next" == s) {
					i.removeClass("ie-current").hide();
					var o = i.next();
					o.length ? o.show().addClass("ie-current") : e(a).first().show().addClass("ie-current")
				} else {
					i.removeClass("ie-current").hide();
					var r = i.prev();
					r.length ? r.show().addClass("ie-current") : e(a).last().show().addClass("ie-current")
				}
			} else {
				var l, d = e(a + ".second-state");
				"next" == s ? (l = d.next(), l.length || (l = e(a + ":first-child"))) : (l = d.prev(), l.length || (l = e(a + ":last-child"))), d.removeClass("second-state").addClass("third-state").onCSSTransitionEnd(function () {
					e(this).removeClass("third-state").addClass("first-state")
				}), l.removeClass("first-state").addClass("second-state")
			}
		},
		y = function (a) {
			var s = t();
			if (s && 10 > s) T(".screen-slider__slide", a);
			else {
				H = !1, e(".screen-slider__line").addClass("visible").onCSSAnimationEnd(function () {
					e(this).removeClass("visible"), H = !0
				});
				var n, i = e(".screen-slider__slide.show-state");
				"next" == a ? (n = i.next(), n.length || (n = e(".screen-slider__slide:first-child"))) : (n = i.prev(), n.length || (n = e(".screen-slider__slide:last-child"))), setTimeout(function () {
					i.removeClass("show-state").addClass("hide-state"), n.removeClass("hide-state").addClass("show-state")
				}, 500)
			}
		},
		q = function () {
			e(".js-dot").addClass("dots-move"), e(".first-dot").onCSSAnimationEnd(function () {
				e(".js-dot").removeClass("dots-move")
			})
		},
		I = function (e) {
			T(".descr-slider__title", e), T(".slide-icon-number", e), T(".descr-slider__text-item", e), q(), y(e)
		},
		A = function () {
			j = setInterval(function () {
				I("next")
			}, 5e3)
		};
	l && t() < 10 && (_(".descr-slider__titles"), _(".descr-slider__icons"), _(".descr-slider__text"), _(".ie-slides"));
	var H = !0;
	e(".js-comp-next").on("click", function () {
		H && (clearInterval(j), I("next"))
	}), e(".js-comp-prev").on("click", function () {
		H && (clearInterval(j), I("prev"))
	});
	var P = e(".js-preview-share__ic"),
		M = !1;
	P.on("click", function () {
		var t = e(this),
			a = t.parent(),
			s = t.closest(".bpage-preview"),
			n = a.find(".js-preview-share");
		return M ? !1 : void(t.hasClass("js-hide-share") ? (M = !0, s.removeClass("active-preview"), a.removeClass("share-icon-move"), n.removeClass("preview-share--row-visible"), setTimeout(function () {
			n.removeClass("preview-share--opened"), setTimeout(function () {
				n.removeClass("preview-share--visible"), t.removeClass("js-hide-share"), M = !1
			}, 500)
		}, 300)) : (M = !0, s.addClass("active-preview"), a.addClass("share-icon-move"), n.addClass("preview-share--visible"), n.width(), n.addClass("preview-share--opened"), setTimeout(function () {
			n.addClass("preview-share--row-visible"), t.addClass("js-hide-share"), M = !1
		}, 400)))
	});
	var S = e("#js-reviews-carousel");
	S.length && S.slick({
		dots: !0,
		arrows: !1,
		speed: 200
	});
	var D, O = 300;
	e(".js-menu-link").on("mouseenter", function () {
		return 1025 > a ? !1 : (e(".js-has-dropdown").children().removeClass("active"), D && clearTimeout(D), void e(this).parent().children().addClass("active"))
	}), e(".js-has-dropdown").on("mouseleave", function () {
		if (!c()) {
			if (1025 > a) return !1;
			clearTimeout(D), D = setTimeout(function () {
				return e(".js-has-dropdown").find(".active").removeClass("active touch-active"), !0
			}, O)
		}
	}), e(".js-menu-dropdown").on("mouseenter", function () {
		return 1025 > a ? !1 : void(e(this).hasClass("active") && clearTimeout(D))
	}), e(".js-menu-link").on("click", function () {
		return c() && h() > 1024 && !e(this).hasClass("touch-active") ? (e(".js-menu-link").removeClass("active touch-active"), e(this).addClass("active touch-active"), !1) : void 0
	}), i.click(function (t) {
		e(t.target).closest(".js-menu-link").length || e(t.target).closest(".js-menu-dropdown").length || e(t.target).closest(".menu-components").length || (e(".js-menu-link").removeClass("active touch-active"), e(".js-menu-dropdown").removeClass("active"), t.stopPropagation())
	});
	var z = e(".js-menu-btn"),
		Y = e(".js-menu-close"),
		E = e(".bpf-menu");
	z.on("click", function (e) {
		e.preventDefault(), E.addClass("bpf-menu--visible"), E.width(), E.addClass("bpf-menu--opened"), setTimeout(function () {
			o.addClass("body-hidden")
		}, 400)
	}), Y.on("click", function (e) {
		e.preventDefault(), E.removeClass("bpf-menu--opened"), o.removeClass("body-hidden"), setTimeout(function () {
			E.removeClass("bpf-menu--visible")
		}, 500)
	}), e(".js-menu-back").on("click", function (t) {
		if (1025 > a) {
			t.preventDefault();
			var s = e(this),
				n = s.parent();
			menuParent = n.closest(".no-visible"), n.addClass("m-menu-hidden"), menuParent.removeClass("no-visible")
		}
	}), e(".js-m-open").on("click", function (t) {
		if (1025 > a) {
			t.preventDefault();
			var s = e(this),
				n = s.closest(".m-dropdown"),
				i = s.parent().find("> .js-m-dropdown");
			n.addClass("no-visible"), i.removeClass("m-menu-hidden"), n.scrollTop(0)
		}
	});
	var F = function (t, a, s) {
			var n = t,
				i = e(".js-open-list"),
				o = n.find(".features-list"),
				r = 0,
				l = 0,
				d = h();
			return o.find("li").length / 2 <= a ? !1 : (i.removeClass("list-btn--hidden"), 770 >= d && s && (o = e(o[0])), e.each(o, function () {
				var t = e(this).children();
				d > 770 && (l = 0), e.each(t, function (t) {
					return t >= s ? !1 : void(l += e(this).innerHeight())
				}), l > r && (r = l)
			}), void n.innerHeight(r))
		},
		W = e(".js-list-wrapp"),
		V = 7,
		$ = 4;
	if (W.length) {
		F(W, V, $);
		var B = e(".js-open-list");
		B.on("click", function () {
			var t = e(this),
				a = t.parent().find(".features-list-footer");
			t.hasClass("opened") ? (t.removeClass("opened"), a.addClass("hidden"), F(W, V, $)) : (t.addClass("opened"), a.removeClass("hidden"), F(W, V))
		});
		var Q;
		n.resize(function () {
			Q && clearTimeout(Q), Q = setTimeout(function () {
				B.hasClass("opened") ? F(W, V) : F(W, V, $)
			}, 200)
		})
	}
	var U = function () {
		if (770 > a) return !1;
		var t = 0,
			s = e(".js-license-list");
		e.each(s, function () {
			var a = e(this).find("li"),
				s = 0;
			e.each(a, function () {
				s += e(this).innerHeight()
			}), s > t && (t = s)
		}), s.height(t)
	};
	U();
	var X = function (t, a) {
		var s = e(t),
			n = 0;
		e.each(s, function () {
			var t = e(this),
				s = t.find(a);
			e.each(s, function () {
				var t = e(this).innerHeight();
				t > n && (n = t)
			}), s.height(n), n = 0
		})
	};
	a > 1024 && X(".js-demo-apps", ".js-demo-text"), e(".js-slick-demo-app").length && e(".js-slick-demo-app").owlCarousel({
		center: !0,
		smartSpeed: 1e3,
		navSpeed: 400,
		autoplay: !0,
		autoplayTimeout: 6e3,
		nav: !0,
		autoplaySpeed: 400,
		autoWidth: !0,
		loop: !0,
		margin: 40,
		themeClass: "",
		autoplayHoverPause: !0
	});
	var N = e(".js-show-qr");
	N.on("click", function (t) {
		if (t.preventDefault(), d()) return !1;
		var a = e(this).attr("data-qr");
		if (a.length) {
			var s = e(".js-qr-block[data-qr='" + a + "']");
			s.length && (s.hasClass("qr-active") ? s.removeClass("qr-active") : s.addClass("qr-active"))
		}
	}), i.click(function (t) {
		e(t.target).closest(".js-show-qr").length || (e(".js-qr-block").removeClass("qr-active"), t.stopPropagation())
	}), e(".check-field").change(function () {
		var t = e(this),
			a = t.parent();
		t.prop("checked") ? a.addClass("bpf-checkbox--check") : a.removeClass("bpf-checkbox--check")
	});
	var G = e(".js-sep-table"),
		J = e(".js-sep-btn"),
		K = e(".separated-container"),
		L = function () {
			var e = G.innerHeight();
			K.height(e).addClass("opened"), J.addClass("opened")
		},
		R = function () {
			K.height(0).removeClass("opened"), J.removeClass("opened")
		},
		Z = window.location.href;
	Z.indexOf("expand=1") + 1 && L(), e(".js-sep-btn").on("click", function () {
		var t = e(this);
		t.hasClass("opened") ? R() : L()
	});
	var ee = e(".js-box");
	e.each(ee, function () {
		var t = e(this),
			a = t.text() + "@dhtmlx.com";
		t.attr("href", "mailto:" + a).text(a)
	}), e.event.special.textchange = {
		setup: function (t, a) {
			e(this).data("lastValue", "true" === this.contentEditable ? e(this).html() : e(this).val()), e(this).bind("keyup.textchange", e.event.special.textchange.handler), e(this).bind("cut.textchange paste.textchange input.textchange", e.event.special.textchange.delayedHandler)
		},
		teardown: function (t) {
			e(this).unbind(".textchange")
		},
		handler: function (t) {
			e.event.special.textchange.triggerIfChanged(e(this))
		},
		delayedHandler: function (t) {
			var a = e(this);
			setTimeout(function () {
				e.event.special.textchange.triggerIfChanged(a)
			}, 25)
		},
		triggerIfChanged: function (e) {
			var t = "true" === e[0].contentEditable ? e.html() : e.val();
			t !== e.data("lastValue") && (e.trigger("textchange", [e.data("lastValue")]), e.data("lastValue", t))
		}
	};
	var te = function (e) {
			var t = e.parent().find(".contact-label"),
				a = e.val();
			"" == a ? t.removeClass("contact-label--focus") : t.addClass("contact-label--focus")
		},
		ae = e(".js-form-field");
	ae.each(function () {
		var t = e(this);
		te(t)
	}), ae.bind("textchange", function () {
		var t = e(this);
		te(t)
	});
	var se = e(".bpf-form"),
		ne = function (e) {
			return e.replace(/&nbsp;/g, " ").replace(/(^[ \t]*)|([ \t]*$)/g, "")
		};
	se.submit(function () {
		var t = e(this),
			a = !0,
			s = "Please fill out this field",
			n = "Fill in your full name, please";
		t.find(".error-field").remove();
		var i = t.find(".js-required-field");
		e.each(i, function () {
			var t = e(this);
			if ("" == ne(t.val())) t.after(e("<span>").addClass("error-field").html(s)), a = !1;
			else if (t.hasClass("js-full-name")) {
				var i = ne(t.val());
				i.split(" ").length - 1 < 1 && (t.after(e("<span>").addClass("error-field").html(n)), a = !1)
			}
		});
		var o = t.find(".js-email-field");
		if (o.length) {
			var r = o.val();
			r.match(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/i) || (o.after(e("<span>").addClass("error-field").html(s)), a = !1)
		}
		var l = t.find(".js-required-check");
		return l.length && !l.prop("checked") && (l.parent().parent().addClass("error-message"), a = !1), a ? t.find("[name='allowprocessing']").val("allowedtrue") : t.find("[name='allowprocessing']").val(""), a
	});
	var ie = e(".js-required-check");
	ie.change(function () {
		var t = e(this),
			a = t.parent().parent();
		t.prop("checked") && a.removeClass("error-message")
	});
	var oe = function (t, a) {
			e.each(t, function () {
				var t = e(this),
					s = t.find(":selected"),
					n = t.find("option"),
					i = t.attr("id"),
					o = e("<div />").addClass(a),
					r = e("<div />").addClass("select--selected"),
					l = e("<div />").addClass(a + "__options all-options hidden"),
					d = s.val(),
					c = s.text(),
					h = s.attr("style");
				t.addClass("hidden"), e.each(n, function () {
					var t = e(this),
						s = t.val(),
						n = t.text(),
						o = a + "__option js-option",
						r = t.attr("style");
					d == s && (o = a + "__option option--selected js-option");
					var c = e("<div />").addClass(o).attr({
						"data-value": s,
						"data-id": "#" + i,
						style: r
					}).text(n);
					l.append(c)
				}), t.after(o.append(r.attr({
					"data-value": d,
					style: h
				}).html(c), l))
			})
		},
		re = e(".js-select");
	oe(re, "bpf-select");
	var le = e(".js-ticket-select");
	oe(le, "bpf-ticket-select");
	var de = e(".js-option");
	de.on("click", function () {
		var t = e(this),
			a = t.parent(),
			s = t.attr("data-id"),
			n = t.attr("data-value"),
			i = t.text(),
			o = t.attr("style");
		e(s).val(n).change(), a.prev().removeClass("opened").attr({
			"data-value": n,
			style: o
		}).text(i), a.find(".option--selected").removeClass("option--selected"), t.addClass("option--selected"), a.addClass("hidden")
	});
	var ce = e(".select--selected");
	ce.on("click", function () {
		var t = e(this),
			a = t.next();
		t.hasClass("opened") ? t.removeClass("opened") : t.addClass("opened"), a.hasClass("hidden") ? a.removeClass("hidden") : a.addClass("hidden")
	}), i.click(function (t) {
		e(t.target).closest(".bpf-select").length || e(t.target).closest(".bpf-ticket-select").length || (e(".select--selected").removeClass("opened"), e(".all-options").addClass("hidden"), t.stopPropagation())
	});
	var he = e(".purchase-form");
	he.submit(function () {
		var t = e(this),
			a = !1,
			s = t.find("input[type='checkbox']");
		return e.each(s, function () {
			return e(this).prop("checked") ? (a = !0, !0) : void 0
		}), a || alert("Please choose component(s) you want to purchase."), a ? t.find("[name='allowprocessing']").val("allowedtrue") : t.find("[name='allowprocessing']").val(""), a
	});
	var ve = e(".js-video");
	if (ve.length) {
		var ue = ve.attr("data-video");
		ue.length && ve.append(e("<iframe />").attr({
			src: ue,
			frameborder: "0"
		}).addClass("bpf-products-video"))
	}
	o.on("change", ".js-file-field", function () {
		var t = e(this),
			a = t.val();
		reWin = /.*\\(.*)/;
		var s = a.replace(reWin, "$1");
		reUnix = /.*\/(.*)/, s = s.replace(reUnix, "$1"), t.closest(".file-attach-wrapp").find(".js-file-path").html(s)
	}), s = h();
	var fe;
	n.resize(function () {
		s != a && (s = h(), k(), U(), je(), fe && clearTimeout(fe), J.hasClass("opened") && (fe = setTimeout(function () {
			L()
		}, 200)))
	});
	var me = e(".js-radio");
	me.each(function () {
		var t = e(this),
			a = t.parent();
		t.prop("checked") && a.addClass("bpf-radio--checked")
	}), me.change(function () {
		var t = e(this),
			a = t.parent(),
			s = t.attr("name"),
			n = e("input[name='" + s + "']");
		n.parent().removeClass("bpf-radio--checked"), t.prop("checked") && a.addClass("bpf-radio--checked")
	});
	var pe = e(".js-reset-form");
	pe.on("click", function () {
		var t = e(this).closest("form"),
			a = t.find(".form-field"),
			s = t.find(".contact-label"),
			n = t.find(".error-field"),
			i = t.find(".js-file-field"),
			o = t.find(".file-attach-path"),
			r = t.find(".js-option"),
			l = t.find(".select--selected");
		a.val(""), s.removeClass("contact-label--focus"), n.remove(), o.html("");
		var d = i.parent(),
			c = d.html();
		d.html("").append(c), e(".js-select option").prop("selected", function () {
			return this.defaultSelected
		});
		var h = r.first();
		r.removeClass("option--selected"), h.addClass("option--selected"), l.html(h.html()).attr("data-value", h.attr("data-value"))
	});
	var Ce = function (e, t) {
			return Math.floor(Math.random() * (t - e + 1) + e)
		},
		ge = function () {
			var t = e(".js-page-404-icon"),
				a = t.length,
				s = 0,
				n = ["active-one", "active-two", "active-three", "active-four", "active-five"];
			t.attr("class", "page-404__i js-page-404-icon");
			var i = setInterval(function () {
				s >= a && (clearInterval(i), setTimeout(function () {
					ge()
				}, 2300));
				var o = n[Ce(0, 4)];
				e(t[s]).addClass(o), s++
			}, 400)
		};
	e(".js-page-404-icon").length && ge();
	var we = e(".js-editions-btn"),
		xe = e(".js-editions-separate"),
		ke = e(".js-editions-table"),
		be = 0,
		je = function () {
			be = 0;
			for (var t = 11, a = ke.find("tr"), s = a.length, n = 0; s > n && !(n >= t); n++) be += e(a[n]).outerHeight();
			xe.height(be).addClass("animated")
		};
	je(), we.on("click", function (t) {
		t.preventDefault();
		var a = e(this);
		a.hasClass("opened") ? (r.animate({
			scrollTop: e(".js-editions-table-section").offset().top
		}, 500), a.removeClass("opened"), xe.height(be)) : (a.addClass("opened"), xe.height(ke.outerHeight()))
	});
	var _e = e(".landing-nav-link");
	_e.on("click", function (t) {
		t.preventDefault();
		var a = e(this).attr("data-href"),
			s = '.landing-section[data-section="' + a + '"]';
		r.animate({
			scrollTop: e(s).offset().top - 70
		}, 500)
	});
	var Te = function (t) {
			var a = 0;
			e.each(t, function () {
				var t = e(this),
					s = t.outerHeight();
				s > a && (a = s)
			}), t.outerHeight(a)
		},
		ye = function (e) {
			var t = "";
			if ("undefined" != typeof Ie.x) {
				var a = Ie.x - e.clientX,
					s = Ie.y - e.clientY;
				Math.abs(a) > Math.abs(s) && a > 0 ? t = "left" : Math.abs(a) > Math.abs(s) && 0 > a ? t = "right" : Math.abs(s) > Math.abs(a) && s > 0 ? t = "up" : Math.abs(s) > Math.abs(a) && 0 > s && (t = "down")
			} else t = "down";
			return t
		},
		qe = e(".goodies-link");
	if (qe.length) {
		l && 10 > l && Te(qe);
		var Ie = {};
		e(document).on("mousemove", function (e) {
			setTimeout(function () {
				Ie = {
					x: e.clientX,
					y: e.clientY
				}
			}, 0)
		})
	}
	qe.on("mouseenter", function (t) {
		var a = e(this),
			s = ye(t);
		e.each(qe, function () {
			var t = e(this);
			t.hasClass("hover") && (t.removeClass().addClass("goodies-link clear clear-leave-to-down"), t.width(), t.addClass("leave-to-down"))
		}), "right" == s && (a.removeClass().addClass("goodies-link clear clear-to-right hover"), a.width(), a.addClass("to-right")), "left" == s && (a.removeClass().addClass("goodies-link clear clear-to-left hover"), a.width(), a.addClass("to-left")), "down" == s && (a.removeClass().addClass("goodies-link clear clear-to-down hover"), a.width(), a.addClass("to-down")), "up" == s && (a.removeClass().addClass("goodies-link clear clear-to-up hover"), a.width(), a.addClass("to-up"))
	}), qe.on("mouseleave", function (t) {
		var a = e(this),
			s = ye(t);
		a.hasClass("hover") && ("left" == s && (a.removeClass().addClass("goodies-link clear clear-leave-to-left"), a.width(), a.addClass("leave-to-left")), "right" == s && (a.removeClass().addClass("goodies-link clear clear-leave-to-right"), a.width(), a.addClass("leave-to-right")), "up" == s && (a.removeClass().addClass("goodies-link clear clear-leave-to-up"), a.width(), a.addClass("leave-to-up")), "down" == s && (a.removeClass().addClass("goodies-link clear clear-leave-to-down"), a.width(), a.addClass("leave-to-down")))
	});
	var Ae = e(".js-promo-container");
	if (Ae.length) {
		var He = function () {
			l && 10 > l ? Ae.removeClass("visible hidden") : Ae.addClass("visible").onCSSAnimationEnd(function () {
				e(this).removeClass("visible hidden")
			})
		};
		setTimeout(He, 5e3);
		var Pe = e(".js-open-promo"),
			Me = e(".js-close-promo");
		Pe.on("click", function (t) {
			t.preventDefault();
			var a = e(this),
				s = a.attr("data-open-card");
			if (s.length) {
				var n = e(".promo-card[data-card='" + s + "']");
				n.addClass("visible")
			}
		}), Me.on("click", function (t) {
			t.preventDefault();
			var a = e(this),
				s = a.attr("data-card");
			if (s.length) {
				var n = e(".promo-card[data-card='" + s + "']");
				n.removeClass("visible")
			}
		})
	}
}(jQuery), jQuery(document).ready(function (e) {
	function t() {
		v || (v = !0, window.requestAnimationFrame ? window.requestAnimationFrame(i) : setTimeout(i, 300))
	}

	function a() {
		u || (u = !0, window.requestAnimationFrame ? window.requestAnimationFrame(o) : setTimeout(o, 300))
	}

	function s() {
		f || (f = !0, window.requestAnimationFrame ? window.requestAnimationFrame(n) : setTimeout(n, 300))
	}

	function n() {
		l = e(window).height(), m = "desktop", e(window).off("scroll", t), e(window).off("scroll", a), "desktop" == m && (e(window).on("scroll", t), e(window).on("scroll", a)), f = !1
	}

	function i() {
		var t = e(window).scrollTop();
		d.each(function () {
			var a = e(this),
				s = a.offset().top,
				n = a.outerHeight(),
				i = h.eq(a.index()).children("a");
			if (a.is(":last-of-type") && (n -= l), s > t) i.removeClass("read reading");
			else if (t >= s && s + n > t) {
				var o = p * (1 - (t - s) / n);
				i.addClass("reading").removeClass("read").find("circle").attr({
					"stroke-dashoffset": o
				})
			} else i.removeClass("reading").addClass("read")
		}), v = !1
	}

	function o() {
		var t = r.offset().top,
			a = r.innerHeight(),
			s = e(window).scrollTop();
		if (console.log(l), t > s) c.removeClass("fixed").attr("style", "");
		else if (s >= t && t + a - l > s) c.addClass("fixed").attr("style", "");
		else {
			Number(d.eq(1).css("padding-top").replace("px", ""));
			c.hasClass("fixed") && c.removeClass("fixed").css({
				position: "absolute",
				top: a - l + 165 + "px"
			})
		}
		u = !1
	}
	var r = e(".license-page");
	if (r.length > 0) {
		var l = e(window).height(),
			d = r.find("article"),
			c = e(".js-license-aside"),
			h = c.find("li"),
			v = !1,
			u = !1,
			f = !1,
			m = "desktop",
			p = parseInt(Math.PI * (2 * h.eq(0).find("circle").attr("r")));
		"desktop" == m && (e(window).on("scroll", t), e(window).on("scroll", a)), e(window).on("resize", s), i(), o(), c.on("click", "a", function (a) {
			a.preventDefault();
			var s = d.eq(e(this).parent("li").index()),
				n = s.offset().top;
			e(window).off("scroll", t), e("body,html").animate({
				scrollTop: n - 110
			}, 300, function () {
				t(), e(window).on("scroll", t)
			})
		})
	}
});
var gadhx = function (e, t, a) {
	t.preventDefault();
	var s = e.getAttribute("href");
	a.length && ga("send", "event", "link", "click", a, {
		hitCallback: function () {
			location.href = s
		}
	})
};
