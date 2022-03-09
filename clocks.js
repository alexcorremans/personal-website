var DateTime = luxon.DateTime;

function generateDT(tzString) {
    return DateTime.now().setLocale('en-GB').setZone(tzString);
}

function getClass(dt) {
    if (dt.hour >=6 && dt.hour < 8) {
        return "dawn";
    } else if (dt.hour >=8 && dt.hour < 10) {
        return "morning";
    } else if (dt.hour >=10 && dt.hour < 12) {
        return "late-morning";
    } else if (dt.hour >=12 && dt.hour < 14) {
        return "lunch";
    } else if (dt.hour >=14 && dt.hour < 16) {
        return "afternoon";
    } else if (dt.hour >=16 && dt.hour < 18) {
        return "late-afternoon";
    } else if (dt.hour >=18 && dt.hour < 20) {
        return "sunset";
    } else if (dt.hour >=20 && dt.hour < 22) {
        return "evening";
    } else {
        return "night";
    }
}

function displayClocks() {
    const pst = generateDT("America/Los_Angeles");
    document.getElementById("date-0").innerHTML = pst.toLocaleString({ weekday: 'short', month: 'long', day: 'numeric' });
    document.getElementById("time-0").innerHTML = pst.toLocaleString(DateTime.TIME_SIMPLE);
    document.getElementById("offset-0").innerHTML = pst.offsetNameShort;
    document.getElementById("time-0").parentElement.parentElement.classList.add(getClass(pst));

    const est = generateDT("America/New_York");
    document.getElementById("date-1").innerHTML = est.toLocaleString({ weekday: 'short', month: 'long', day: 'numeric' });
    document.getElementById("time-1").innerHTML = est.toLocaleString(DateTime.TIME_SIMPLE);
    document.getElementById("offset-1").innerHTML = est.offsetNameShort;
    document.getElementById("time-1").parentElement.parentElement.classList.add(getClass(est));

    const uk = generateDT("Europe/London");
    document.getElementById("date-2").innerHTML = uk.toLocaleString({ weekday: 'short', month: 'long', day: 'numeric' });
    document.getElementById("time-2").innerHTML = uk.toLocaleString(DateTime.TIME_SIMPLE);
    document.getElementById("offset-2").innerHTML = uk.offsetNameShort;
    document.getElementById("time-2").parentElement.parentElement.classList.add(getClass(uk));

    const eur = generateDT("Europe/Berlin");
    document.getElementById("date-3").innerHTML = eur.toLocaleString({ weekday: 'short', month: 'long', day: 'numeric' });
    document.getElementById("time-3").innerHTML = eur.toLocaleString(DateTime.TIME_SIMPLE);
    document.getElementById("offset-3").innerHTML = eur.offsetNameShort;
    document.getElementById("time-3").parentElement.parentElement.classList.add(getClass(eur));

    const dub = generateDT("Asia/Dubai");
    document.getElementById("date-4").innerHTML = dub.toLocaleString({ weekday: 'short', month: 'long', day: 'numeric' });
    document.getElementById("time-4").innerHTML = dub.toLocaleString(DateTime.TIME_SIMPLE);
    document.getElementById("offset-4").innerHTML = dub.offsetNameShort;
    document.getElementById("time-4").parentElement.parentElement.classList.add(getClass(dub));

    const syd = generateDT("Australia/Sydney");
    document.getElementById("date-5").innerHTML = syd.toLocaleString({ weekday: 'short', month: 'long', day: 'numeric' });
    document.getElementById("time-5").innerHTML = syd.toLocaleString(DateTime.TIME_SIMPLE);
    document.getElementById("offset-5").innerHTML = syd.offsetNameShort;
    document.getElementById("time-5").parentElement.parentElement.classList.add(getClass(syd));
}

window.onload = displayClocks();
setInterval(displayClocks, 1000);