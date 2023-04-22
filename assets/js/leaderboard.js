const sheetLink = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQgDwfXzSMYR_qkyF2tBeQNXDyuzqREiNJQ3Y2xJhdSPeJ-8ixpizjcWukZb-9KO9rt_87Lm1cB6Vrr/pubhtml?gid=143532623&single=true";

function makeHttpObject() {
    try { return new XMLHttpRequest(); }
    catch (error) { }
    try { return new ActiveXObject("Msxml2.XMLHTTP"); }
    catch (error) { }
    try { return new ActiveXObject("Microsoft.XMLHTTP"); }
    catch (error) { }
    throw new Error("Could not create HTTP request object.");
}

window.onload = function () {
    var request = makeHttpObject();
    request.open("GET", sheetLink, true);
    request.send(null);
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            const table = document.getElementById("sprintboard").getElementsByTagName("tbody")[0];
            response = request.responseText;
            const parser = new DOMParser().parseFromString(response, "text/html");
            sheet = Array.from(parser.getElementsByTagName("tr"));
            sheet.splice(0, 2);
            for (let i = 0; i < sheet.length; i++) {
                const row = document.createElement("tr");
                row.setAttribute("scope", "row");
                const original = sheet[i].getElementsByTagName("td");
                console.log(sheet);
                // name
                const name = document.createElement("td");
                name.appendChild(document.createTextNode(original[0].innerText));
                row.appendChild(name);
                // points
                const points = document.createElement("td");
                points.appendChild(document.createTextNode(original[1].innerText));
                row.appendChild(points);

                table.appendChild(row);
            }
            $('#sprintboard').DataTable({
                order: [[1, 'desc']],
                "pageLength": 50,
            });;
        }
    };
};