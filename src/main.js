

        // JavaScript för att fälla ut listan

        //hämtar element by id o lägger till händelselyssnare
        document.getElementById('toggleButton').addEventListener('click', function() {

            var list = document.getElementById('myList');

            //kontrollerar om list innehåller klassen hidden .. listan är dold om den innehåller list
            if (list.classList.contains('hidden')) {

                //om listan är dold, ta bort klassen hidden från list  -> då kommer listan att visas
                list.classList.remove('hidden');

                // och ändra texten på knappen till "Dölj lista" 
                this.textContent = 'Dölj lista'; 

                // annars
            } else {

                //lägg till klassen hidden till list -> vilket gör att listan döljs igen
                list.classList.add('hidden');

                // o ändra texten på knappen till "Visa lista"
                this.textContent = 'Visa lista'; 
            }
        });