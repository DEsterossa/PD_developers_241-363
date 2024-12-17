document.onreadystatechange = () => {
	if (document.readyState !== "complete") return;

	btn_edit_phone = document.getElementById("setting-edit-phone");
	btn_edit_mail = document.getElementById("setting-edit-mail");
	btn_edit_pwd = document.getElementById("setting-edit-pwd");

	if (btn_edit_phone) {
		btn_edit_phone.onclick = () => {
			inp_new_phone = document.createElement("input");
			inp_cur_pwd = document.createElement("input");
			inp_acpt_code = document.createElement("input");
			inp_new_phone.id = "setting-edit-inp-new-phone";
			inp_cur_pwd.id = "setting-edit-inp-cur-pwd";
			inp_acpt_code.id = "setting-edit-inp-acpt-code";
			inp_new_phone.placeholder = "Введите новый номер телефона";
			inp_cur_pwd.placeholder = "Введите пароль";
			inp_acpt_code.placeholder = "Введите код подтверждения";
			el_inputs = [ inp_new_phone, inp_cur_pwd, inp_acpt_code ]

			btn_confirm = document.createElement("button");
			btn_confirm.innerHTML = "Запросить код";
			btn_confirm.onclick = (e) => {
				e.target.innerHTML = "Подтвердить";
				e.target.onclick = () => {
					remove_setting_edit_bkg();
				}
			}

			show_setting("Изменение номера телефона", el_inputs, btn_confirm);
		};
	}

	if (btn_edit_mail) {
		btn_edit_mail.onclick = () => {
			inp_new_mail = document.createElement("input");
			inp_cur_pwd = document.createElement("input");
			inp_acpt_code = document.createElement("input");
			inp_new_mail.id = "setting-edit-inp-new-mail";
			inp_cur_pwd.id = "setting-edit-inp-cur-pwd";
			inp_acpt_code.id = "setting-edit-inp-acpt-code";
			inp_new_mail.placeholder = "Введите новую почту";
			inp_cur_pwd.placeholder = "Введите текущий пароль";
			inp_acpt_code.placeholder = "Введите код подтверждения";
			el_inputs = [ inp_new_mail, inp_cur_pwd, inp_acpt_code ]

			btn_confirm = document.createElement("button");
			btn_confirm.innerHTML = "Запросить код";
			btn_confirm.onclick = (e) => {
				e.target.innerHTML = "Подтвердить";
				e.target.onclick = () => {
					remove_setting_edit_bkg();
				}
			}

			show_setting("Изменение почты", el_inputs, btn_confirm);
		};
	}

	if (btn_edit_pwd) {
		btn_edit_pwd.onclick = () => {
			inp_old_pwd = document.createElement("input");
			inp_new_pwd1 = document.createElement("input");
			inp_new_pwd2 = document.createElement("input");
			inp_acpt_code = document.createElement("input");
			inp_old_pwd.id = "setting-edit-inp-old-pwd";
			inp_new_pwd1.id = "setting-edit-inp-new-pwd1";
			inp_new_pwd2.id = "setting-edit-inp-new-pwd2";
			inp_acpt_code.id = "setting-edit-inp-acpt-code";
			inp_old_pwd.placeholder = "Введите старый пароль";
			inp_new_pwd1.placeholder = "Введите новый пароль";
			inp_new_pwd2.placeholder = "Повторите новый пароль";
			inp_acpt_code.placeholder = "Введите код подтверждения";
			el_inputs = [ inp_old_pwd, inp_new_pwd1, inp_new_pwd2, inp_acpt_code ]

			btn_confirm = document.createElement("button");
			btn_confirm.innerHTML = "Запросить код";
			btn_confirm.onclick = (e) => {
				e.target.innerHTML = "Подтвердить";
				e.target.onclick = () => {
					remove_setting_edit_bkg();
				}
			}

			show_setting("Изменение почты", el_inputs, btn_confirm);
		};
	}
};

show_setting = (title, inputs, confirm_btn) => {
	setting = create_setting_edit_bkg();
	setting = setting.children[0];

	h_title = document.getElementById("setting-edit-title");
	h_title.innerHTML = title;

	for (el_inp of inputs) {
		el_inp.type = "text";
		el_inp.style.fontFamily = "Gilroy Light";
		el_inp.style.fontSize = "calc(1.2vw + 0.8vh)";
		el_inp.style.background = "#fff";// "rgba(0, 204, 204, 0.5)";
		el_inp.style.color = "#333";
		el_inp.style.borderRadius = "4px";
		el_inp.style.marginTop = "2vh";
		el_inp.style.marginBottom = el_inp.marginTop;
		el_inp.style.border = "0";
		el_inp.style.width = "40ch";
		setting.appendChild(el_inp);
	}

	confirm_btn.style.marginTop = "calc(1vw + 2vh)";
	confirm_btn.style.marginBottom = confirm_btn.style.marginTop;
	confirm_btn.style.background = "rgba(0, 204, 204, 0.5)";
	confirm_btn.style.color = "#fff";
	confirm_btn.style.fontFamily = "Gilroy Light";
	confirm_btn.style.fontSize = "calc(1.7vw + 0.8vh)";
	confirm_btn.style.borderRadius = "10px";
	confirm_btn.style.border = "0";
	confirm_btn.style.padding = "calc(0.5vh + 0.5vw) calc(2vw + 1vh)";
	setting.appendChild(confirm_btn);
};

create_setting_edit_bkg = () => {
	setting_edit_bkg = document.createElement("div");
	setting_edit_bkg.id = "setting-edit-bkg";
	setting_edit_bkg.style.content = "";
	setting_edit_bkg.style.display = "flex";
	setting_edit_bkg.style.position = "fixed";
	setting_edit_bkg.style.top = "0";
	setting_edit_bkg.style.left = "0";
	setting_edit_bkg.style.padding = "0px 0px";
	setting_edit_bkg.style.margin = "0px 0px";
	setting_edit_bkg.style.width = "100vw";
	setting_edit_bkg.style.height = "100vh";
	setting_edit_bkg.style.background = "rgba(0, 0, 0, 0.35)";
	setting_edit_bkg.style.alignItems = "center";
	setting_edit_bkg.style.justifyContent = "center";
	setting_edit_bkg.style.verticalAlignment = "middle";
	setting_edit_bkg.style.zIndex = "999999999";

	setting_edit_container = document.createElement("div");
	setting_edit_container.id = "setting-edit-container";
	setting_edit_container.style.content = "";
	setting_edit_container.style.display = "flex";
	setting_edit_container.style.position = "fixed";
	setting_edit_container.style.flexDirection = "column";
	setting_edit_container.style.padding = "calc(2vh + 1vw) calc(1vh + 2vw)";
	setting_edit_container.style.width = "50vw";
	setting_edit_container.style.height = "40vh";
	setting_edit_container.style.background = "#333";
	setting_edit_container.style.borderRadius = "10px";
	setting_edit_container.style.alignItems = "center";
	setting_edit_container.style.justifyContent = "center";
	setting_edit_container.style.zIndex = "9999999991";

	setting_edit_title = document.createElement("h2");
	setting_edit_title.id = "setting-edit-title";
	setting_edit_title.innerHTML = "Настройка";
	setting_edit_container.appendChild(setting_edit_title);

	setting_edit_bkg.appendChild(setting_edit_container);
	document.body.appendChild(setting_edit_bkg);
	return setting_edit_bkg;
};

remove_setting_edit_bkg = () => {
	el = document.getElementById("setting-edit-bkg");
	if (el) el.remove();
};