// 로그아웃
function logout() {
    if (confirm("로그아웃 하시겠습니까?")) {
        location.href = "index.html";
    }
    return false;
};
// login.html
//회원가입되어있는지 여부 판단/ 로그인
function checkMember() {
    var entryList = JSON.parse(localStorage.getItem("entryList"));
    $.each(entryList, function (i, entry) {

        if (entry.id == $('#userId').val()) {
            if (entry.pwd == $('#userPwd').val()) {
                alert('로그인 성공');
                location.href = "index2.html";
                return false;
            }
            else {
                alert('비밀번호가 틀렸습니다.');
                $('#userId').val('');
                $('#userPwd').val('');
                $('#userId').focus();
                return false;

            }
        }
        else if (i == entryList.length - 1) {
            alert('존재하지 않는 아이디입니다.');
            $('#userId').val('');
            $('#userPwd').val('');
            $('#userId').focus();
        }

        console.log(entryList.length + " : " + i);


    });


};
//memberList.html
//localStorage에서 회원목록 가져오기
//회원가입 멤버 리스트 display
function listDisplay() {
    var $table = $("#listTable tbody");
    var entryList = JSON.parse(localStorage.getItem("entryList"));
    //초기화
    $table.html('');
    $('#searchName').val('');

    $.each(entryList, function (i, entry) {
        console.log(i, entry);
        var d = new Date(entry.date);

        var tr = "<tr>"
            + "<td>" + entry.name + "</td>"
            + "<td>" + entry.id + "</td>"
            + "<td>" + entry.email + "</td>"
            + "<td>" + (d.getMonth() + 1) + "/" + d.getDate() + "</td>"
            + "</tr>";
        $table.append(tr);
    });
    if($table.html()==''){
        $table.append("등록된 회원이 없습니다.");
    }
};

//이름으로 회원조회
function searchName() {
    var $table = $("#listTable tbody");
    var entryList = JSON.parse(localStorage.getItem("entryList"));
    //초기화
    $table.html('');
    var tr;
    $.each(entryList, function (i, entry) {
        console.log(i, entry);
        var d = new Date(entry.date);
        var name = entry.name;
        
        if(name == $('#searchName').val()){
            tr = "<tr>"
            + "<td>" + name + "</td>"
            + "<td>" + entry.id + "</td>"
            + "<td>" + entry.email + "</td>"
            + "<td>" + (d.getMonth() + 1) + "/" + d.getDate() + "</td>"
            + "</tr>";
            return false;
        
        }
        else if(i == entryList.length-1){
            tr="조회된 항목이 없습니다.";
        }
        
    });
    $table.append(tr);
};




// signup.html
//회원가입 validation
var ncheck = false;
var icheck = false;
var echeck = false;
var pcheck = false;
var ppcheck = false;
function checkForm() {
    if (ncheck && icheck && echeck && pcheck && ppcheck)
        return ncheck;
    alert("항목들을 제대로 입력해주세요.");

};

function validation() {
    //이름
    $('#userName').keyup(function () {

        if (/^[가-힣]{2,5}$/.test($('#userName').val())) {
            $('#name-chkNotice').html('올바른 이름입니다.');
            $('#name-chkNotice').css('color', 'blue');
            ncheck = true;

        } else {
            $('#name-chkNotice').html('한글 2~5글자입력바람');
            $('#name-chkNotice').css('color', 'red');
            // $('#userPwd').focus();
            ncheck = false;
        }

    });
    //아이디
    $('#userId').keyup(function () {

        if (/^[A-Za-z0-9\-]{5,20}$/.test($('#userId').val())) {
            $('#id-chkNotice').html('올바른 아이디입니다.');
            $('#id-chkNotice').css('color', 'blue');
            icheck = true;
        } else {
            $('#id-chkNotice').html('영문자,숫자 5~20글자 입력바람');
            $('#id-chkNotice').css('color', 'red');
            icheck = false;
        }

    });
    //이메일
    $('#userEmail').keyup(function () {

        if (/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/.test($('#userEmail').val())) {
            $('#email-chkNotice').html('올바른 이메일 형식입니다.');
            $('#email-chkNotice').css('color', 'blue');
            echeck = true;

        } else {
            $('#email-chkNotice').html('올바르지않은 이메일 형식입니다.');
            $('#email-chkNotice').css('color', 'red');
            echeck = false;
        }

    });
    //비밀번호
    $('#userPwd').keyup(function () {
        var pwdExp = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/
        if (pwdExp.test($('#userPwd').val())) {
            $('#pwd-chkNotice').html('올바른 비밀번호 형식입니다.');
            $('#pwd-chkNotice').css('color', 'blue');
            pcheck = true;

        } else {
            $('#pwd-chkNotice').html('영문자,숫자,특수문자를 하나이상 입력바람');
            $('#pwd-chkNotice').css('color', 'red');
            pcheck = false;
        }

    });
    //비밀번호확인
    $('#pwdCheck').keyup(function () {

        if ($('#userPwd').val() != $('#pwdCheck').val()) {
            $('#pwdChk-chkNotice').html('비밀번호 일치하지 않음');
            $('#pwdChk-chkNotice').css('color', 'red');
            // $('#userPwd').focus();
            ppcheck = false;
        } else {
            $('#pwdChk-chkNotice').html('비밀번호 일치함');
            $('#pwdChk-chkNotice').css('color', 'blue');
            ppcheck = true;
        }

    });
}
function saveMember(flag) {
    if (flag) {
        var entry = {
            name: $("#userName").val(),
            id: $("#userId").val(),
            email: $("#userEmail").val(),
            pwd: $("#userPwd").val(),
            date: Date.now()
        };
        console.log(entry);
        //배열생성
        var entryList = JSON.parse(localStorage.getItem("entryList"));
        console.log(entryList);

        //첫회원인 경우
        if (entryList == null) {
            entryList = [];
        }
        entryList.push(entry); //js

        var jsonStr = JSON.stringify(entryList);//json
        localStorage.setItem("entryList", jsonStr);//json

        alert("회원가입이 완료되었습니다.");
        // location.href = "index.html";

    }
};