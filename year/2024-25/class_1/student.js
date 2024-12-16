
$(document).ready(function() {
    function update_data() {
        $.getJSON("https://example.com/example.json", function(Data) {
                    
            // Example 1
            document.getElementById('name1').innerHTML = Data.example1;
                            
            // Example 2
            document.getElementById('example2').innerHTML = Data.example2;
                    
            // Example 3
            document.getElementById('example3').innerHTML = Data.example3;
        });
    }
update_data();
setInterval(update_data, '30000');
});