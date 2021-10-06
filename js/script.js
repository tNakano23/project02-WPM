const textbox01 = document.getElementById('textbox01');
const textbox02 = document.getElementById('textbox02');
const textbox03 = document.getElementById('textbox03');
const btn01     = document.getElementById('btn01');
const btn02     = document.getElementById('btn02');


const result = ""
// ----

function calucurate(NUM) {
    // --初期値
    var time = 0;
    var NUM_int = 'あ';
    var NUM_crn = 'あ';
    var NUM_spc = 'あ';


    // --”２３００”
    var NUM_judge_for_int =  new RegExp(/^[0-9]{1,}$/);
    var NUM_int_var       =  NUM.match(NUM_judge_for_int); //"2300"
    if (NUM_int_var != null){NUM_int = NUM_int_var[0]}
    // ---end

    // --”２３：００”
    var NUM_judge_for_crn =  new RegExp(/[0-9]{1,}:[0-9]{1,}/);
    var NUM_crn_var       =  NUM.match(NUM_judge_for_crn); //"23:00"
    if (NUM_crn_var != null)
        {NUM_crn = NUM_crn_var[0]

        // -”２３：”
        var NUM_crn_UP_RegExp = new RegExp(/^[0-9]{1,}:/);
        var NUM_crn_UP = NUM_crn.match(NUM_crn_UP_RegExp); //"23:"
        var single_crn_UP = NUM_crn_UP[0];
        var true_UP   = single_crn_UP.replace( ":" , "");
        // -”：００”
        var NUM_crn_DW_RegExp = new RegExp(/:[0-9]{1,}$/);
        var NUM_crn_DW = NUM_crn.match(NUM_crn_DW_RegExp); //":00"
        var single_crn_DW = NUM_crn_DW[0];
        var true_DW   = single_crn_DW.replace( ":" , "");
        }
    // ---end

    // --”２３　００”
    var NUM_judge_for_spc =  new RegExp(/[0-9]{1,} [0-9]{1,}/);
    var NUM_spc_var       =  NUM.match(NUM_judge_for_spc); //"23 00"
    if (NUM_spc_var != null)
        {NUM_spc = NUM_spc_var[0]

        // -”２３　”
        var NUM_spc_UP_RegExp = new RegExp(/^[0-9]{1,} /);
        var NUM_spc_UP = NUM_spc.match(NUM_spc_UP_RegExp); //"23 "
        var single_spc_UP = NUM_spc_UP[0];
        var true_UP   = single_spc_UP.replace( " " , "");
        // -”　００”
        var NUM_spc_DW_RegExp = new RegExp(/ [0-9]{1,}$/);
        var NUM_spc_DW = NUM_spc.match(NUM_spc_DW_RegExp); //" 00"
        var single_spc_DW = NUM_spc_DW[0];
        var true_DW   = single_spc_DW.replace( " " , "");
        }
    // ---end

    // -”２３＊６０ ＋ ００”
    var toNum_true_UP = Number(true_UP);
    var toNum_true_DW = Number(true_DW);
    var true_NUM = toNum_true_UP*60 + toNum_true_DW;
    // ---end

    if     (NUM === NUM_int ){
        time = Number(NUM);
        return time;
    }
    else if(NUM === NUM_crn ){
        time = true_NUM
        return time;

    }
    else if(NUM === NUM_spc ){
        time = true_NUM
        return time;

    }
}

// ----

btn02.onclick     = function () {
    textbox03.value = "";
}

textbox01.oninput = function () {
    run()
}
textbox02.oninput = function () {
    run()
}

function run() {
    let NUM  = textbox02.value
    let num1 = Number(textbox01.value)
    let result = num1 / calucurate(NUM) * 60 
    result = Math.round(result * 100) / 100
    if (isFinite(result) == false) {
        result = ""
    }
    textbox03.value = result;
    return result
}

