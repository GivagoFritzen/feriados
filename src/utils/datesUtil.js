import nationalHollidays from '../json/national.json';

export default function GetDates() {
    const year = new Date().getFullYear();

    let hollidays = nationalHollidays.map(holliday => {
        const numberOfTheWeek = new Date(`${holliday["day"]}/${year}`).getDay();
        holliday["day-of-week"] = GetDatOfTheWeek(numberOfTheWeek);
        return holliday;
    });

    const easter = GetDateEaster();
    const corpusChristi = GetCorpusChristiDate(easter);
    const carnaval = GetCarnavalDate(easter);

    var data = [];
    for (var i in hollidays)
        data.push(hollidays[i]);

    data.push(corpusChristi);
    data.push(carnaval);

    //  Terça feira carnaval Rio de Janeiro    

    return OrderDays(data);
}

function OrderDays(hollidays) {
    return hollidays.sort(function (a, b) {
        var aa = a.day.split('/').reverse().join(),
            bb = b.day.split('/').reverse().join();
        return aa < bb ? -1 : (aa > bb ? 1 : 0);
    });
}

function GetDatOfTheWeek(day) {
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
        default:
            return "Sábado";
    }
}

function GetDateEaster() {
    const year = new Date().getFullYear();

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

function GetCarnavalDate(easterDay) {
    let sumDate = new Date();
    sumDate = sumDate.decreaseDays(easterDay, 47);

    const day = sumDate.getDate().toString();
    const month = twoDigit(sumDate.getMonth() + 1);
    const year = new Date().getFullYear();

    const numberOfTheWeek = new Date(`${day}/${month}/${year}`).getDay();
    return {
        "day": `${day}/${month}`,
        "name": "Carnaval",
        "day-of-week": GetDatOfTheWeek(numberOfTheWeek)
    }
}

function GetCorpusChristiDate(easterDay) {
    let sumDate = new Date();
    sumDate = sumDate.addDays(easterDay, 60);

    const day = sumDate.getDate().toString();
    const month = twoDigit(sumDate.getMonth() + 1);
    const year = new Date().getFullYear();

    const numberOfTheWeek = new Date(`${day}/${month}/${year}`).getDay();
    return {
        "day": `${day}/${month}`,
        "name": "Corpus Christi",
        "day-of-week": GetDatOfTheWeek(numberOfTheWeek)
    }
}

function twoDigit(number) {
    var twodigit = number >= 10 ? number : "0" + number.toString();
    return twodigit;
}

Date.prototype.addDays = function (currentDay, days) {
    var date = new Date(currentDay);
    date.setDate(date.getDate() + days);
    return date;
}

Date.prototype.decreaseDays = function (currentDate, days) {
    var date = new Date(currentDate);
    date.setDate(date.getDate() - days);
    return date;
}