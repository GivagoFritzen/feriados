import nationalHollidays from '../json/national.json';

export default function GetDates(currentState, currentYear) {
    const year = currentYear;
    const easter = GetDateEaster(currentYear);

    const hollidays = nationalHollidays.map(holliday => {
        const MMDD = TransformDDMMToMMDD(holliday["day"]);
        const numberOfTheWeek = new Date(`${MMDD}/${year}`).getDay();
        holliday["day-of-week"] = GetDateOfTheWeek(numberOfTheWeek);
        return holliday;
    });

    var data = [];
    for (var i in hollidays)
        data.push(hollidays[i]);

    var statesHollidays = GetStateHollidays(currentState);
    if (statesHollidays !== undefined) {
        for (var y in statesHollidays) {
            const MMDD = TransformDDMMToMMDD(statesHollidays[y]["day"]);
            const numberOfTheWeek = new Date(`${MMDD}/${year}`).getDay();
            statesHollidays[y]["day-of-week"] = GetDateOfTheWeek(numberOfTheWeek);
            data.push(statesHollidays[y]);
        }
    }

    if (currentState === "rioDeJaneiro")
        data.push(GetCarnavalDateRioDeJaneiro(easter, currentYear));

    data.push(GetCorpusChristiDate(easter, currentYear));
    data.push(GetCarnavalDate(easter, currentYear));

    return OrderDays(data);
}

const states = {
    acre: require('../json/states/acre.json'),
    alagoas: require('../json/states/alagoas.json'),
    amapa: require('../json/states/amapa.json'),
    amazonas: require('../json/states/amazonas.json'),
    bahia: require('../json/states/bahia.json'),
    ceara: require('../json/states/ceara.json'),
    distritoFederal: require('../json/states/distritoFederal.json'),
    espiritoSanto: require('../json/states/espiritoSanto.json'),
    goias: require('../json/states/goias.json'),
    maranhao: require('../json/states/acre.json'),
    matoGrosso: require('../json/states/acre.json'),
    matoGrossoDoSul: require('../json/states/matoGrossoDoSul.json'),
    minasGerais: require('../json/states/minasGerais.json'),
    para: require('../json/states/para.json'),
    paraiba: require('../json/states/paraiba.json'),
    parana: require('../json/states/parana.json'),
    pernambuco: require('../json/states/pernambuco.json'),
    piaui: require('../json/states/piaui.json'),
    rioDeJaneiro: require('../json/states/rioDeJaneiro.json'),
    rioGrandeDoNorte: require('../json/states/rioGrandeDoNorte.json'),
    rioGrandeDoSul: require('../json/states/rioGrandeDoSul.json'),
    rondonia: require('../json/states/rondonia.json'),
    santaCatarina: require('../json/states/santaCatarina.json'),
    saoPaulo: require('../json/states/saoPaulo.json'),
    sergipe: require('../json/states/sergipe.json'),
};

function GetStateHollidays(currentState) {
    if (currentState !== "national")
        return states[currentState];
}

function OrderDays(hollidays) {
    return hollidays.sort(function (a, b) {
        var aa = a.day.split('/').reverse().join(),
            bb = b.day.split('/').reverse().join();
        return aa < bb ? -1 : (aa > bb ? 1 : 0);
    });
}

function TransformDDMMToMMDD(dayAndMonth) {
    const array = dayAndMonth.split("/");
    const MMDD = `${array[1]}/${array[0]}`;
    return MMDD;
}

function GetDateOfTheWeek(day) {
    switch (day) {
        case 0:
            return "Domingo";
        case 1:
            return "Segunda";
        case 2:
            return "Terça";
        case 3:
            return "Quarta";
        case 4:
            return "Quinta";
        case 5:
            return "Sexta";
        case 6:
            return "Sábado";
        default:
            return day;
    }
}

function GetDateEaster(currentYear) {
    const year = currentYear;

    const a = year % 19;
    const b = Math.floor(year / 100);
    const c = year % 100;
    const d = Math.floor(b / 4);
    const e = b % 4;
    const f = Math.floor((b + 8) / 25);
    const g = Math.floor((b - f + 1) / 3);
    const h = (19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4);
    const k = c % 4;
    const L = (32 + 2 * e + 2 * i - h - k) % 7;
    const m = Math.floor((a + 11 * h + 22 * L) / 451);
    const month = Math.floor((h + L - 7 * m + 114) / 31);
    const day = 1 + (h + L - 7 * m + 114) % 31;

    return `${month}-${day}-${year}`;
}

function GetCarnavalDate(easterDay, currentYear) {
    const sumDate = DecreaseDays(easterDay, 47);

    const day = sumDate.getDate().toString();
    const month = TwoDigit(sumDate.getMonth() + 1);
    const year = currentYear;

    const numberOfTheWeek = new Date(`${month}/${day}/${year}`).getDay();
    return {
        "day": `${day}/${month}`,
        "name": "Carnaval",
        "day-of-week": GetDateOfTheWeek(numberOfTheWeek)
    }
}

function GetCarnavalDateRioDeJaneiro(easterDay, currentYear) {
    const sumDate = DecreaseDays(easterDay, 46);

    const day = sumDate.getDate().toString();
    const month = TwoDigit(sumDate.getMonth() + 1);
    const year = currentYear;

    const numberOfTheWeek = new Date(`${month}/${day}/${year}`).getDay();
    return {
        "day": `${day}/${month}`,
        "name": "Carnaval",
        "day-of-week": GetDateOfTheWeek(numberOfTheWeek)
    }
}

function GetCorpusChristiDate(easterDay, currentYear) {
    let sumDate = new Date();
    sumDate = AddDays(easterDay, 60);

    const day = sumDate.getDate().toString();
    const month = TwoDigit(sumDate.getMonth() + 1);
    const year = currentYear;

    const numberOfTheWeek = new Date(`${month}/${day}/${year}`).getDay();
    return {
        "day": `${day}/${month}`,
        "name": "Corpus Christi",
        "day-of-week": GetDateOfTheWeek(numberOfTheWeek)
    }
}

function TwoDigit(number) {
    return number >= 10 ? number : "0" + number.toString();
}

function AddDays(currentDay, days) {
    currentDay = currentDay.replace("-", "/");
    var date = new Date(currentDay);
    date.setDate(date.getDate() + days);
    return date;
}

function DecreaseDays(currentDay, days) {
    currentDay = currentDay.replace("-", "/");
    var date = new Date(currentDay);
    date.setDate(date.getDate() - days);
    return date;
}