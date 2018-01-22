/* google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var uiData = google.visualization.arrayToDataTable([
          ['Skill', 'Experience in Months'],
          [ 'HTML5', 30],          
          [ 'ES5', 30],
          [ 'ES6', 10],
          ['CSS3', 60],
          [ 'AngularJS', 44],
          [ 'TypeScript', 10],
          [ 'Angular 2', 10],
          [ 'React', 8],
          [ 'Bootstrap', 44],
          [ 'Sass', 8],
          [ 'Flexbox', 8]
        ]);

        var uiOptions = {
          title: 'Experience Level',
          titlePosition: 'none',
          hAxis: {title: 'Skills', textPosition: 'vertical'},
          vAxis: {title: 'Experience in Months', minValue: 0, maxValue: 50},
          legend: 'none',          
        };

        var uiChart = new google.visualization.ScatterChart(document.getElementById('ui_chart_div'));

        uiChart.draw(uiData, uiOptions);


        var serverData = google.visualization.arrayToDataTable([
          ['Skill', 'Experience in Months'],
          [ 'C#', 44],          
          [ 'Java', 60],
          [ 'ASP.NET MVC', 44],
          [ 'WebAPI', 44],
          [ 'Entity Framework', 44],
          [ 'JSP', 60],
          [ 'Spring Boot', 10],
          [ 'Hibernate', 10]
        ]);

        var serverOptions = {
          title: 'Experience Level',
          titlePosition: 'none',
          hAxis: {title: 'Skills', textPosition: 'vertical'},
          vAxis: {title: 'Experience in Months', minValue: 0, maxValue: 50},
          legend: 'none',          
        };

        var serverChart = new google.visualization.ScatterChart(document.getElementById('server_chart_div'));

        serverChart.draw(serverData, serverOptions);

        var dbData = google.visualization.arrayToDataTable([
          ['Skill', 'Experience in Months'],
          [ 'MS SQL Server', 44],          
          [ 'Oracle', 60],
          [ 'MySQL', 60],
          [ 'MongoDB', 10],
        ]);

        var serverOptions = {
          title: 'Experience Level',
          titlePosition: 'none',
          hAxis: {title: 'Skills', textPosition: 'vertical'},
          vAxis: {title: 'Experience in Months', minValue: 0, maxValue: 50},
          legend: 'none',          
        };

        var serverChart = new google.visualization.ScatterChart(document.getElementById('server_chart_div'));

        serverChart.draw(serverData, serverOptions);
        
        

      }
      
*/
      google.charts.load('current', {'packages':['timeline']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var container = document.getElementById('chart_div');
        var chart = new google.visualization.Timeline(container);
        var dataTable = new google.visualization.DataTable();

        dataTable.addColumn({ type: 'string', id: 'Skill' });
        dataTable.addColumn({ type: 'date', id: 'Start' });
        dataTable.addColumn({ type: 'date', id: 'End' });
        dataTable.addRows([
          [ 'Spring Boot', new Date(2014, 01, 01), new Date() ],
          [ 'Adams',      new Date(2014, 01, 01),  new Date() ],
          [ 'Jefferson',  new Date(2014, 01, 01),  new Date() ]]);

        chart.draw(dataTable);
      }

      