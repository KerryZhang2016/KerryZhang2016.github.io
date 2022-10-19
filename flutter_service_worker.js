'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f5e9a7d175af97d17d4a9761117a6b8f",
"index.html": "6f79629631b02ee7aac739c58f4c6ade",
"/": "6f79629631b02ee7aac739c58f4c6ade",
"main.dart.js": "7276ded695e01c40e7b386217d878cb2",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "69a7026828192d13e820964dd9dfe2ca",
"assets/AssetManifest.json": "21b28f4ae8714ebdc37d97504c63a69a",
"assets/NOTICES": "0f8df4708291a95382c5ec064aac987a",
"assets/FontManifest.json": "082f72c624af3b31b122b32213422c2c",
"assets/packages/rw_base/assets/fonts/NotoSans-Regular.ttf": "21f6235482ecdf67217dfa18483f7716",
"assets/packages/rw_base/assets/fonts/NotoSans-Medium.ttf": "4e9401185a9b347a3fbffc5a01923273",
"assets/shaders/ink_sparkle.frag": "8a456b1c637afb9a4b7c5e19488d9717",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/ic_detail_eql_bmp.png": "acbcb974d5763d9f3759dba4f86d4984",
"assets/assets/images/ic_oa_passport_front.png": "3ed2d6d3eb6e2c742a72cf92796d46d9",
"assets/assets/images/ic_place_order_hint.png": "db8b832d44d1659d0260bb456e539308",
"assets/assets/images/ic_place_order_price_target.png": "7230c5c4cd8a0a17f8ac8cafdf15d6bc",
"assets/assets/images/ic_fx_record.png": "2cfd2aee1a70ade1f33fbef19177ab2e",
"assets/assets/images/ic_oa_authentication_check.png": "cf2cd03900fa1e5aeac1b62d1fb1a2a4",
"assets/assets/images/ic_watchlist_group_delete.png": "54666568de8c86d80810986cc4bae01f",
"assets/assets/images/ic_base_region_tag_hk.png": "bd2ed132fdedf48e66a0b72861c5a590",
"assets/assets/images/ic_watchlist_group_top.png": "2350ad5522beaf376f581c7fd332cdbe",
"assets/assets/images/ic_withdrawal_region_hk.png": "df7241c4f137b5dbc5994fdd156480ee",
"assets/assets/images/ic_me_quote_center.png": "ed6a73a2a6d00a8e8b0116e8fb153bbe",
"assets/assets/images/ic_account_login_online_guide.png": "744c7c29c0a40b34382c2f8beeb8726e",
"assets/assets/images/ic_oa_passport_back.png": "7952ca0f30c44690c0aa9ff7f9d7b0e0",
"assets/assets/images/ic_msg_center_trading.png": "884e39a5511ddd5eca8daa80bc69bbbc",
"assets/assets/images/ic_detail_top_notice_close.png": "789f6b4393d238df415a05a723e7be89",
"assets/assets/images/ic_oa_margin_account.png": "201d5e9f6d4c9f999213e9205a7c01d0",
"assets/assets/images/ic_detail_order.png": "f717bc54fb3fd22fbc3bdaada64184e7",
"assets/assets/images/ic_detail_position.png": "474414895d9b6d9052ff88b32fe302d1",
"assets/assets/images/ic_oa_checkbox_select.png": "2390e3ec3ff4f7fd5a9b780ec2c60080",
"assets/assets/images/ic_quote_level_us.png": "9f469032f3b54f19b67b08470a80963b",
"assets/assets/images/ic_quote_level_disable.png": "d88d3a5adba75c86ae7c9c3262737140",
"assets/assets/images/ic_detail_star_select.png": "140af619a1d9974b222a6aba9b211475",
"assets/assets/images/ic_detail_cn.png": "55af3285f2f3039ba3d2813ee5598c97",
"assets/assets/images/ic_trade_eye_close.png": "40f6e9a96685e240aaa06404f751a6a0",
"assets/assets/images/ic_deposit_waiting.png": "3fc82e3dde27d63b08f6a7ab91901350",
"assets/assets/images/ic_warning_add.png": "860e14b275504d048f933e4d28befb1f",
"assets/assets/images/ic_warning_ok.png": "7ef596bdfb1ea2a1db0393ee5731f8e0",
"assets/assets/images/ic_sign_pwd_eye_close.png": "6e5f5bef49bcc3453e17d74640b63a0f",
"assets/assets/images/ic_deposit_add_pic.png": "4739d256e93e50620b2cd7d9138ebaef",
"assets/assets/images/ic_land_detail_search.png": "6f733fe63065b3b0216ab35af1c7aef3",
"assets/assets/images/ic_quote_level_activity_register.png": "672d69c1858e436f00dd8bbdcedad456",
"assets/assets/images/ic_me_help_center.png": "c2da1fe96b9ee95852086b3d4c1cc5f4",
"assets/assets/images/ic_land_detail_close.png": "5740ee9f5ee8c353b31a71eca4219cbb",
"assets/assets/images/ic_oa_authentication_step3.png": "78498e4719f36b62884906c54ab5fc8e",
"assets/assets/images/ic_trade_operate_replace.png": "21d64562e9a4d887edebdb89a44bd749",
"assets/assets/images/ic_trade_order_price_minus.png": "9a6b56109a5ab2b31f025d3b9643dae6",
"assets/assets/images/ic_base_region_tag_sg.png": "9191ff1636c1e70eec0684db65cc1d17",
"assets/assets/images/ic_oa_authentication_step2.png": "d73cc9500c7c89072fbb5486ef84b2ae",
"assets/assets/images/ic_warrant_list_filter.png": "7ff3c3d23a6b895c4ebbcc523a208130",
"assets/assets/images/ic_detail_margin_support.png": "42484b846f97343e437cd97f05ece910",
"assets/assets/images/ic_trade_cash_flow_option.png": "47a15671810e538c0e60712735132de1",
"assets/assets/images/ic_oa_auditing.png": "a0f3ee981eefdf3ed6f15afb71e03122",
"assets/assets/images/ic_base_market_select.png": "a8c5f68669a70209737622b3dede3179",
"assets/assets/images/ic_oa_audit_success.png": "d457813ccc88460f9efd0c869b0af7fb",
"assets/assets/images/ic_warning_delete.png": "df1c21fde2f9ac1b7dba68f3831a1617",
"assets/assets/images/ic_detail_chart_setting_dialog_ohlc_select.png": "4ba89c92bb7375193083195408cdf725",
"assets/assets/images/ic_me_pic.png": "07531c4e55c1197fcb83945c117917c3",
"assets/assets/images/ic_detail_us.png": "b3e3be065fa55ef11316082c3c404263",
"assets/assets/images/ic_fast_order_plus.png": "700dd9d532aa16879b3b987cd0036f9f",
"assets/assets/images/ic_fast_order_close.png": "ee8c27fe5eee93eb9389dd527872b672",
"assets/assets/images/ic_message_popup_success.png": "bc96f30886912c193ccc7024e8b432f6",
"assets/assets/images/ic_ipo_tier_select_dialog_close.png": "9035a085a5826c1c6e6023ea0ca57e46",
"assets/assets/images/ic_deposit_flow_close.png": "b3736d7b1ada9d94c8ac531124615c9b",
"assets/assets/images/ic_base_region_tag_jp.png": "433d7001cee6cef95f40bcbdd7b4f552",
"assets/assets/images/ic_trade_all_function.png": "5b8a97442ab22e2fd30af9fa1b38fb94",
"assets/assets/images/ic_toolbar_back_day.png": "ed89d6c4f5a83e1992408e8740b98600",
"assets/assets/images/ic_base_refresher_fail.png": "5bed267d1f6ad49307ada6dc39dc7630",
"assets/assets/images/ic_ipo_minus.png": "e09eb886fc03f9653f1cd97c91b59246",
"assets/assets/images/ic_oa_process_not_done.png": "35704c032f67ef3510f8b36b80cd459a",
"assets/assets/images/ic_base_bottom_dialog_close_day.png": "49c56cc62def5f728514239cc554fa86",
"assets/assets/images/ic_oa_authentication_step1.png": "f433410c07d14c8f32896a7a3d7d30e3",
"assets/assets/images/ic_trade_eye.png": "b1f992e14217d56361716feebd581dfb",
"assets/assets/images/ic_trade_operate_detail.png": "b02edd5e001f2bd2d3d6bfbf23f8988c",
"assets/assets/images/ic_oa_guide_id_card.png": "4885e2ca36f367fef6fc55ebd429e902",
"assets/assets/images/ic_quote_level_cn.png": "94b628576641d12d8dab7d3cd70cc8d2",
"assets/assets/images/ic_msg_center_quote_warning.png": "4a52c7845bf402d512fca451481569ac",
"assets/assets/images/ic_base_refresher_success.png": "4c244931b6689b3896dddee2a076641c",
"assets/assets/images/ic_fx_rate_refresh.png": "f6c36de669e74d962bfea34d5c12a489",
"assets/assets/images/ic_deposit_flow_step3_highlight.png": "342a0adf828d6eb8107279e63100ddca",
"assets/assets/images/ic_trade_fast_transaction.png": "43cce07d60891810312ec93ac24392d6",
"assets/assets/images/ic_fast_order_minus.png": "547749951416b90c6993f75b0ebef3c3",
"assets/assets/images/ic_oa_authentication_live.png": "999e6a67030b9dee5ad455bff280f7f9",
"assets/assets/images/ic_watchlist_mode_simple.png": "64b8f65c02fded7e0a696db645dae29c",
"assets/assets/images/ic_ipo_sub_success.png": "66b2b76ab56d1fe78418055f6d579c45",
"assets/assets/images/ic_place_order_arrow_down.png": "99cb1f9ab9a660cbce26fe18f23173d1",
"assets/assets/images/ic_base_news.png": "fa01fe1e8a600e5f800efe842e64f178",
"assets/assets/images/ic_detail_chart_expand.png": "3c5c5d5ca0aae9d226843a6532efa6a5",
"assets/assets/images/ic_place_order_minus.png": "192b1ca6e71448386ff10b45dc970966",
"assets/assets/images/ic_account_login_deposit_guide.png": "924472d83387bf335415e3f36cd95e01",
"assets/assets/images/ic_detail_chart_setting_dialog_close.png": "c0abf36555d6cdf271d239a47ecb89c1",
"assets/assets/images/ic_ipo_center_record.png": "fc690d1b31dc5949942ca4ef717f44a1",
"assets/assets/images/ic_oa_revising.png": "bedc2a13e95d55f83ff416f6ec9c8a7f",
"assets/assets/images/ic_detail_hk.png": "6307b50d46ec54e8aa2bcf52279e7509",
"assets/assets/images/ic_market_ipo_listing.png": "b1afce9889b8a5573d6b8e0bd01060ef",
"assets/assets/images/ic_oa_edt_clear.png": "7b4ee6b90f66dd21a81b1a296d86e47c",
"assets/assets/images/ic_oa_arrow_down.png": "99174aff024268ed52ebc11845bb417c",
"assets/assets/images/ic_watchlist_group_drag.png": "2c060a1e39ff7b513fb632b574287a7a",
"assets/assets/images/ic_trade_cash_flow_fee_tax.png": "9630197aa97669da93c0717ca827aeac",
"assets/assets/images/ic_trade_cash_flow_dnw.png": "a3ecd6ac5e5affe6ce75243a0a1c5b54",
"assets/assets/images/ic_base_market.png": "2f6f36e516de39ab6a64bdbbde350e66",
"assets/assets/images/ic_account_login_support.png": "47645c63c3d109d26a90a3dd24e13c68",
"assets/assets/images/ic_setting_protection_page2.png": "82df595bb4f688bf3d68187a505acf22",
"assets/assets/images/ic_trade_order_price_plus.png": "6956354024d913cfb9d93003625ea6a3",
"assets/assets/images/ic_trade_cash_flow_ipo.png": "b8bc969be38069ad9bd102b658e556ab",
"assets/assets/images/ic_withdrawal_bank_add.png": "8c1ff86b58762bac208ad3d56fb97aa2",
"assets/assets/images/ic_place_order_sell_btn.png": "a9f3781b3102c08af897a8897de29351",
"assets/assets/images/ic_deposit_bank_default_logo.png": "c14c35c626d39ef95b3c7169a5f13593",
"assets/assets/images/ic_market_ipo_today_listed.png": "3cc0d718607719c584d7af022ad01a53",
"assets/assets/images/ic_trade_arrow_down.png": "79a42d8a30badf56250afdd999e06b41",
"assets/assets/images/ic_watchlist_list_add.png": "7dace6e3372e50d87c60a027dfcc094f",
"assets/assets/images/ic_trade_deposit_withdrawal_record.png": "37cb6c5bf64890162ddbffc150372e37",
"assets/assets/images/ic_detail_eql_v1.png": "b060d3321ba91295350ebe2fd9294245",
"assets/assets/images/ic_base_news_select.png": "f2203f0c6c3407b6ecc4bf6d6bec62cf",
"assets/assets/images/ic_base_region_tag_us.png": "3e56f97cd10672d1ab6bf23db7c834eb",
"assets/assets/images/ic_withdrawal_region_us.png": "caedbe97a82ddd94d3748ac0738fb0e0",
"assets/assets/images/ic_detail_jp.png": "f0fd60897b8f454c5027bf4455351c2a",
"assets/assets/images/ic_detail_eql_v0.png": "65f0a2d4be7497977a61ee60857f1066",
"assets/assets/images/ic_message_popup_failed.png": "99169b1163d6dec8c7c0f764de550fc4",
"assets/assets/images/ic_oa_id_card_back.png": "4ebcb47a7277a6db2d429d039d55bdca",
"assets/assets/images/ic_place_order_circle_day.png": "da0132e12a81425dcc784e06db371c58",
"assets/assets/images/ic_setting_protection_page1.png": "757f67c942ea0a7f0488df6b8276f22a",
"assets/assets/images/ic_base_me.png": "44fbf7b7e78553aa823dc22d8e3932ad",
"assets/assets/images/ic_account_login_paper_icon.png": "535c2b8563f2b8006bedbfde47469aec",
"assets/assets/images/ic_me_warning.png": "4acde02e350ca43a061c75f9808f6bf0",
"assets/assets/images/ic_quote_level_hk.png": "01268a11010ea8c167a5e463f60575e8",
"assets/assets/images/ic_detail_sg.png": "9ad4f2c3d5dbd9402673bdd1305a497b",
"assets/assets/images/ic_watchlist_segment_card_live.png": "3ba5b9f2d13307575dc0c4900df5e687",
"assets/assets/images/ic_watchlist_empty.png": "0caafce51e92305c9d8bfc59b0e8dfd3",
"assets/assets/images/ic_detail_eql_v2.png": "24470b01f3b9d68b7d11d87561493451",
"assets/assets/images/ic_search_content_search.png": "9fb80cecbc03f221f0cc0a996b1abec1",
"assets/assets/images/ic_account_login_open_guide.png": "524a177ef7b408671f38f10ddd8ab9ab",
"assets/assets/images/ic_base_item_arrow_right.png": "f06db4de09130483bbc73bfde725af10",
"assets/assets/images/ic_detail_alert.png": "2eff74281e3051c445ea5a0fe7f09c6c",
"assets/assets/images/ic_trade_fx_exchange.png": "3d97fc5b0f23a32b3340007e00cfdc88",
"assets/assets/images/ic_base_logo_icon.png": "04c1661690cc45e207585680946e71a8",
"assets/assets/images/ic_setting_arrow_right.png": "eccb507218d2820695e0de1585f4393d",
"assets/assets/images/ic_base_watchlist_select.png": "6ae4764807b6878fc1170728036b8c45",
"assets/assets/images/ic_me_live_service.png": "7ff68d37f3e686e836c731b55b43c797",
"assets/assets/images/ic_oa_cetificate_cn.png": "31edf3da0aeb5137256ec01c0cc778f1",
"assets/assets/images/ic_watchlist_setting.png": "90efc7ecd1ebd97fb2dfef47a02688cf",
"assets/assets/images/ic_me_card_quote_activity.png": "feffa06e436f8901fa0a0ef10f0545e2",
"assets/assets/images/ic_watchlist_segment_card_arrow2.png": "9f30d52fd74769f42816299279e798b9",
"assets/assets/images/ic_oa_guide_bank_card.png": "99d231eb106820d4b81259779420ea5e",
"assets/assets/images/ic_watchlist_pre_section.png": "7e13cbc48b7643fd51323c6169cc0baf",
"assets/assets/images/ic_oa_date.png": "ea37cdd7574a60b79be6bac5e729774b",
"assets/assets/images/ic_base_face_id.png": "628406806510d83cdffea0c9b22688e6",
"assets/assets/images/ic_place_order_circle_select.png": "c65c546296ea4a09e0e256ac968665f0",
"assets/assets/images/ic_trade_cash_flow_corp_action.png": "7c03624824191948e47a8a5fd7cf3780",
"assets/assets/images/ic_oa_camera.png": "9eeeeca58af33368df1371c2d29edd2e",
"assets/assets/images/ic_detail_position_select.png": "d28be15ba339c59417f308eb5c5e7d30",
"assets/assets/images/ic_oa_confirm_circle_select.png": "8d52637e502a26c614d31019e503e0a9",
"assets/assets/images/ic_oa_process_line.png": "ed967aff45b9cd0856b89c3fd6490947",
"assets/assets/images/ic_watchlist_segment_card_paper.png": "57f554078db197535b0a92be0dfc2547",
"assets/assets/images/ic_detail_short_support.png": "7fb83b15978f643bf9987830dcd58099",
"assets/assets/images/ic_detail_chart_arrow.png": "f091207780137951669bdea68d26ead2",
"assets/assets/images/ic_detail_chart_setting_dialog_hollow.png": "085c2783a04a2d0111d56e2baacbba5e",
"assets/assets/images/ic_ipo_subscribe_arrow_down.png": "8053df9f4a2d8348aff36d90dca207d9",
"assets/assets/images/ic_toolbar_search.png": "9e58acdbcebd9aa455988b9f08006e97",
"assets/assets/images/ic_deposit_select_dialog_search.png": "b153ae6049f26d30e453d214c8b6703f",
"assets/assets/images/ic_msg_center_clear.png": "8899249fcbc47d39bfc20101c5ddf15f",
"assets/assets/images/ic_me_setting.png": "2aa927c80f77cc3d7e885bdcb02e6c7a",
"assets/assets/images/ic_oa_guide_residential_address.png": "16394276736df2a1f4fad429b19d67ab",
"assets/assets/images/ic_oa_authentication_deposit.png": "cba5dfc4292ff00151e5ad1666fc4464",
"assets/assets/images/ic_trade_plus.png": "f1a147f7bb9a747c448c554225b679f9",
"assets/assets/images/ic_oa_confirm_circle_immutable.png": "0ed254032e99a0d9d8cff3ce80b041a9",
"assets/assets/images/ic_market_ipo_open.png": "c7a21d86e0ed1a00503133c9d2b13e8e",
"assets/assets/images/ic_place_order_plus.png": "fed2a47f73e1c0d87eebcf6a3dde0969",
"assets/assets/images/ic_watchlist_popup_arrow.png": "3f405b2e45502c243fe6299137438d48",
"assets/assets/images/ic_base_touch_id.png": "7e0772cefbe36e65843ac8fefd7efde3",
"assets/assets/images/ic_trade_cash_flow_forex.png": "265c2552107e36fab4e9d10049051ab4",
"assets/assets/images/ic_base_star.png": "6ce321d3c3044f3766c6ffb7a3f22a28",
"assets/assets/images/ic_watchlist_segment_card_icon.png": "2e153b28ddce65e50eb496a49e541a81",
"assets/assets/images/ic_deposit_flow_step1_arrow_right.png": "4aa4fbff1c2a12499b73b71eaa0075a7",
"assets/assets/images/ic_base_refresher_arrow.png": "6b96df82718baf44e532ec1a377aa976",
"assets/assets/images/ic_base_me_select.png": "bc51a08e8c31b3228fa8184cec305127",
"assets/assets/images/ic_oa_confirm_circle.png": "c80d671fec9f10af432d11b943e93eab",
"assets/assets/images/ic_oa_cetificate_others.png": "edc67e637e239dc3aa3a487f856b4b76",
"assets/assets/images/ic_oa_guide_wifi.png": "beb7c28ba9aa09ebdf9a5f9a0c10c6a9",
"assets/assets/images/ic_base_watchlist.png": "34a102f9f011f6cae9cd97a9bea0a319",
"assets/assets/images/ic_fx_switch.png": "5ba02121132f7aa2b0cb3664b6ba7136",
"assets/assets/images/ic_toolbar_share.png": "b3d74592c9bbdc94aacae9d2cd6b43eb",
"assets/assets/images/ic_trade_ipo.png": "5f2398655ab8bbfe7467cf8fecbb243d",
"assets/assets/images/ic_sign_pwd_eye_open.png": "b1f992e14217d56361716feebd581dfb",
"assets/assets/images/ic_place_order_preview.png": "de08b76b09264b91b7b8fd8e95ee9119",
"assets/assets/images/ic_trade_operate_cancel.png": "363ebea7c17fd7746a27f3479b3439f7",
"assets/assets/images/ic_trade_order_record.png": "e29d2fa8b1e62cdccfdce01f0f217780",
"assets/assets/images/ic_detail_chart_setting_dialog_solid.png": "6518ff311e28a2d7bb43ea5396c1de28",
"assets/assets/images/ic_trade_cash_flow_other.png": "8aceefd2f2ab5430bb9ab0019b3fa091",
"assets/assets/images/ic_place_order_circle.png": "d0f47a92ce8209448fbbf594d5bc6d57",
"assets/assets/images/ic_place_order_circle_select_day.png": "b17cbe0acc5e6fe55479dfeaa0ee5fca",
"assets/assets/images/ic_detail_star.png": "2ffd9a0ab4d594782ec66fcf2a6664a4",
"assets/assets/images/ic_base_logo_name.png": "1698ce7bb46401b01981fd2de564f111",
"assets/assets/images/ic_trade_account_detail.png": "59a54538a8c68eb8d49546eb590504eb",
"assets/assets/images/ic_quote_level_futures.png": "d4545e54d9f5b7b2cc07dfc736cf02f4",
"assets/assets/images/ic_detail_chart_setting_dialog_setting.png": "21e8b7bf59db2329f52367c42c3f7e0e",
"assets/assets/images/ic_me_invite_code.png": "cb08fa14e996877a264d89f5851df496",
"assets/assets/images/ic_search_content_star_select.png": "bece94e2202e3f2136b2f26523aef6e6",
"assets/assets/images/ic_watchlist_post_section.png": "8897b990e2acc736bbb1bb4716ea921e",
"assets/assets/images/ic_quote_level_activity_deposit.png": "09e37d9f1cd5a90a4fd076cf24a825a0",
"assets/assets/images/ic_search_content_delete.png": "5dcb5dfa88acd9797647f12ef4c14783",
"assets/assets/images/ic_ipo_plus.png": "766c5993680d692749eb95fd45c0e127",
"assets/assets/images/ic_oa_complete.png": "d5a74fa3440884fb5e749a6dcaeda9b4",
"assets/assets/images/ic_detail_fundamental_arrow.png": "e74a27dbef76805144567600c64e0a01",
"assets/assets/images/ic_watchlist_list_edit.png": "38285a5a9d82386488cbff35fcf7e61d",
"assets/assets/images/ic_oa_authentication_notary.png": "00a188672a0e213955b02da44ce62a6d",
"assets/assets/images/ic_trade_deposit.png": "97803a7e71d3880dd010d77e8cac4401",
"assets/assets/images/ic_warning_save.png": "0280812c938917143522494f0cc71f2f",
"assets/assets/images/ic_deposit_copy.png": "80b6a41631cf54e731967e0294ad5de5",
"assets/assets/images/ic_trade_withdrawal.png": "4a575e0f675a2ac13060e572ee4bdb0d",
"assets/assets/images/ic_place_order_record.png": "9e8014bd2ef9898b8877c8eaf520b3f1",
"assets/assets/images/ic_ipo_center_arrow_right.png": "06618aa23cc44333980f32e82282ebb5",
"assets/assets/images/ic_me_card_invite_activity.png": "920287a668334c36f1564ef82484e924",
"assets/assets/images/ic_oa_checkbox_unselect_day.png": "bb0ba33494eade7869b72dadff267c3b",
"assets/assets/images/ic_oa_process_done.png": "5909ab4f8a34ea292b242d1504015272",
"assets/assets/images/ic_base_region_tag_sh.png": "64c41bad61ffb82e5e0deb436a48ce8e",
"assets/assets/images/ic_base_trade.png": "e7b5511644a5be72881b106a49e84f16",
"assets/assets/images/ic_toolbar_msg.png": "8f3ec846d37a368cbdc9f5ba9a98a361",
"assets/assets/images/ic_trade_segment_arrow_right.png": "9f30d52fd74769f42816299279e798b9",
"assets/assets/images/ic_place_order_buy_btn.png": "8ff312728482bf4fd2362fdc673da4a3",
"assets/assets/images/ic_detail_trade.png": "69ea6a63ec198e56319317fe72ac247c",
"assets/assets/images/ic_oa_cetificate_hk.png": "72415b0bc4cfeb33b85a7e02522085b4",
"assets/assets/images/ic_account_login_icon3.png": "6b0bf43a303ccc52c2adfe9ff0dbf76d",
"assets/assets/images/ic_account_login_icon1.png": "90b01824440d8b5d1c6f09671c6ac060",
"assets/assets/images/ic_toolbar_back.png": "f8a5a99c44c1f9b9e0dac2a10fde5ab0",
"assets/assets/images/ic_deposit_flow_step2_highlight.png": "392f8ccf17686c1113ff55af86d0b8b9",
"assets/assets/images/ic_oa_authentication_face.png": "348c11507c4633faf3c7a2e97af95cfc",
"assets/assets/images/ic_trade_cash_flow_trade.png": "eac34eea4174c4b260041d5577fe7e11",
"assets/assets/images/ic_base_logo.png": "fd12758b68966af93f99782a655856b7",
"assets/assets/images/ic_trade_operate_quote.png": "70fbd69fde99ac97db44a3abc3837ce5",
"assets/assets/images/ic_base_sort_down.png": "ae8a9657cb0be5d288dec16507a5d2b9",
"assets/assets/images/ic_place_order_circle_disable.png": "1dc1893b0ea66b5384057b630ff911e2",
"assets/assets/images/ic_base_sort_up.png": "93817789b08109881cdb4dfccac6b6fe",
"assets/assets/images/ic_watchlist_group_edit.png": "6f7269963d65b558f68fa94929206656",
"assets/assets/images/ic_base_trade_select.png": "8aff7d71b777f627b13ed8ce662149f7",
"assets/assets/images/ic_detail_chart_setting_dialog_solid_select.png": "13ed3093f31c6bbed1d426c6fb818c74",
"assets/assets/images/ic_detail_chart_setting_dialog_hollow_select.png": "934121fc648a04de98e0d28e01db7cd2",
"assets/assets/images/ic_account_login_icon4.png": "e4af3731be6931c924d6f35a4fee3339",
"assets/assets/images/ic_deposit_flow_step2.png": "3c91bf9bb1cbe81a4a5521fbad96b7e5",
"assets/assets/images/ic_watchlist_group_bottom.png": "af220b49f4a329db40ef5cda72453817",
"assets/assets/images/ic_watchlist_segment_card_arrow.png": "f5d52239b1b2165abf4b95f2e75a025e",
"assets/assets/images/ic_news_flash_circle.png": "02c749470af66284bc060172517cd36a",
"assets/assets/images/ic_deposit_flow_step1_highlight.png": "59182961d4cae8db5109c8960105bf31",
"assets/assets/images/ic_detail_chart_setting_dialog_ohlc.png": "b8cabec74ad510f77348aa528078b312",
"assets/assets/images/ic_detail_order_select.png": "aa1c446dd9411889862aa3fd1b02cd6d",
"assets/assets/images/ic_base_sort.png": "0eb5f74201de676868bc4fe075f5f79a",
"assets/assets/images/ic_search_content_star.png": "3e102c465d3250e65eef03d3e1d4877e",
"assets/assets/images/ic_quote_level_activity_close.png": "a52e71c4ed918704fcf3125428f5b268",
"assets/assets/images/ic_trade_cash_flow.png": "2364b49bf190df332da729a889eac141",
"assets/assets/images/ic_msg_center_announcement.png": "4e7bbf4d91b219cfccfb36fe40cb4e9a",
"assets/assets/images/ic_oa_cash_account.png": "611d7850ba3ea865431ab99172d85462",
"assets/assets/images/ic_search_content_close.png": "1e8618d3d97fce61df4515640adce839",
"assets/assets/images/ic_withdrawal_bank_edit.png": "566ca6b33ea68b900840beb837c85fe7",
"assets/assets/images/ic_msg_center_ipo.png": "9cc3d6d467c9665a387ba78918d5d3f1",
"assets/assets/images/ic_oa_id_card_front.png": "51a372410b21cf96c90625b2cbdb59ee",
"assets/assets/images/ic_base_keyboard_delete.png": "c4b034809fc2fec627b4fd3defb9dfae",
"assets/assets/images/ic_quote_level_record.png": "4c7828a1fada1e051e60f5cfb496a7e9",
"assets/assets/images/ic_trade_login_close.png": "be764609a87b272883b4a2d22a7ecf81",
"assets/assets/images/ic_trade_minus.png": "e3789b3c9e410cf44500734baf5a913a",
"assets/assets/images/ic_quote_level_activity_open.png": "83594f5bef68fa2c076b7f80f62ef085",
"assets/assets/images/ic_withdrawal_delete.png": "0021e77a5d7be2dde7496dce57b56771",
"assets/assets/images/ic_deposit_flow_step3.png": "deae689fdfa0b68951116b4c3a949dce",
"assets/assets/images/ic_account_login_icon5.png": "128f4d7539d13791eb0da7abb61b6e05",
"assets/assets/images/ic_deposit_flow_step1.png": "f91bdadfa640871c6607479568e31657",
"assets/assets/images/ic_oa_checkbox_select_day.png": "c35d894695c2afdca9732ec7e07704a2",
"assets/assets/images/ic_msg_center_arrow_right.png": "4b3b39807c18be839a5b2c92e8cb5593",
"assets/assets/images/ic_deposit_delete_pic.png": "81e471061eca6b92fcb9dc5d965c377d",
"assets/assets/images/ic_base_region_tag_sz.png": "afbb607604b2e8bdd10e6cd821102147",
"assets/assets/images/ic_watchlist_mode_trend.png": "6e0932568b96d2c0f6c3fe0b890f7800",
"assets/assets/images/ic_detail_chart_setting.png": "28030a64c2901f9b95703ebf2cb34717",
"assets/assets/images/ic_withdrawal_add.png": "73292dceea88ca57839aa6d72bfe1a4e",
"assets/assets/images/ic_base_bottom_dialog_close.png": "c0abf36555d6cdf271d239a47ecb89c1",
"assets/assets/images/ic_watchlist_add.png": "860e14b275504d048f933e4d28befb1f",
"assets/assets/images/ic_oa_authentication_pin.png": "93734f33bc04b72cd7d68aba623a23b8",
"assets/assets/fonts/NotoSans-Regular.ttf": "21f6235482ecdf67217dfa18483f7716",
"assets/assets/fonts/NotoSans-Medium.ttf": "4e9401185a9b347a3fbffc5a01923273",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
