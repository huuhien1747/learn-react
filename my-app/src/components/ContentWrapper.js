import React, { Component } from 'react';
import '../A4page.css';

var testData = {
    "semester": "01",
    "fromDate": "06/2019",
    "toDate": "07/2019",
    "ranking": "Giỏi",
    "dueTime": "07/2019"
}
export default class ContentWrapper extends Component {
    constructor() {
        super();

    }

    componentWillMount() {
        // window.print();
    }

    render() {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let yyyy = today.getFullYear();
        return (
            <div id="content">
                <p id="para">CHỨNG NHẬN</p>
                <p id="para">Ông/bà:</p>
                <p>..................................</p>
                <p id="para">Đơn vị:</p><br />
                <p id="heading1">CÔNG TY TNHH HƯNG THỊNH PHÁT</p>
                <p id="para">Khóa {testData.semester}</p>
                <p id="para">Từ {testData.fromDate} đến {testData.toDate}</p>
                <p id="para">Kết quả xếp hạng</p>
                <p id="para">{testData.ranking}</p>
                <p id="para">Giấy chứng nhận có giá trị trong 02 năm từ {testData.toDate} đến {testData.dueTime}</p>
                <p id="para">TP. Hồ Chí Minh Ngày {dd + '/' + mm + '/' + yyyy}</p>
                <p id="para">Người cấp chứng nhận</p>
                <p id="para">Giám đốc</p><br /><br />
                <p id="para">Hoàng Văn Tam</p>
            </div>
        );
    }

}