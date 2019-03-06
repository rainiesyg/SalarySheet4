mui.init();
var now = new Date();
mui.ready(function() {
	// flush("init")
});

function flush(test) {
	mui("#username")[0].innerText = "张大山2019年2月实发" + test;
	mui("#btn_month")[0].innerText = now.getMonth() + 1 + "月";
	mui(".panel-top-salary")[0].innerText = "8800.00";
	mui("#panel_bottom_salary1")[0].innerText = "10400.00";
	mui("#panel_bottom_salary2")[0].innerText = "1000.00";
	mui("#panel_bottom_salary3")[0].innerText = "600.00";
	mui("#detail_salary1")[0].innerText = "3970.00";
	mui("#detail_salary2")[0].innerText = "5500.00";
	mui("#detail_salary3")[0].innerText = "930.00";

	// 				mui(".mui-input-group input").each(function() {
	// 					//若当前input为空，则alert提醒
	// 					if (!this.value || trim(this.value) == "") {
	// 						var label = this.previousElementSibling;
	// 						mui.alert(label.innerText + "不允许为空");
	// 						check = false;
	// 						return false;
	// 					}
	// 				});

}

mui("div").on('tap', '#btn_month', function() {
	var dtPicker = new mui.DtPicker({
		type: "month",
		beginDate: new Date(2018, 12), //设置开始日期 
		endDate: new Date(now.getFullYear(), now.getMonth()), //设置结束日期 
	});
	dtPicker.show(function(selectItems) {
		console.log(selectItems.y); //{text: "2016",value: 2016} 
		console.log(selectItems.m); //{text: "05",value: "05"} 
		//去除月份前面的0
		var month = selectItems.m.value;
		if (month.indexOf("0") == 0) {
			month = month.replace("0", "");
		}
		mui("#btn_month")[0].innerText = month + "月";

		// 		mui.ajax('http://10.3.132.80:8080/SalarySheet4/index.html', {
		// 			// 						data: {
		// 			// 							key: '2580537eeb6f0b7154ee00fbc24386c6',
		// 			// 							v: '1.0',
		// 			// 							month: 11,
		// 			// 							day: 1
		// 			// 						},
		// 			dataType: 'json', //服务器返回json格式数据
		// 			type: 'get', //HTTP请求类型
		// 			timeout: 10000, //超时时间设置为10秒；
		// 			headers: {
		// 				'Content-Type': 'application/json'
		// 			},
		// 			success: function(data) {
		// 				//服务器返回响应，根据响应结果，分析是否登录成功；
		// 				console.log("sussssss")
		// 			},
		// 			error: function(xhr, type, errorThrown) {
		// 				//异常处理；
		// 				console.log(type);
		// 				flush("twice")
		// 			}
		// 		});

		location.href = 'http://10.3.132.80:8080/SalarySheet4/index2.html';

	});
})
