        function jumlahkan() {
            var bilangan1 = parseInt(document.getElementById("bilangan1").value);
            var bilangan2 = parseInt(document.getElementById("bilangan2").value);
            document.getElementById("hasil").innerHTML = bilangan1 + bilangan2;
        }
        function reset() {
            document.getElementById("bilangan1").value = "";
            document.getElementById("bilangan2").value = "";
            document.getElementById("hasil").innerHTML = "";
        }