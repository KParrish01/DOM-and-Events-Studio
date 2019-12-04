
// add load event handler to window
  window.addEventListener("load", function() {
      // put DOM code here to ensure elements have been loaded
      console.log('window loaded');

        function checkIfReady(){
          let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
            if (response) {
              console.log("Shuttle in flight.");
              document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
              // let background = document.querySelector("#shuttleBackground");
              // background.style["background-color"] = "blue";
              document.querySelector("#shuttleBackground").style["background-color"] = "blue";
              document.getElementById("spaceShuttleHeight").innerHTML = 10000;
            } else {
              console.log("***I guess we're not going anywhere!***");
            }
        }

        let takeoff_ButtonClick = document.getElementById("takeoff");
            takeoff_ButtonClick.addEventListener("click", checkIfReady);
  
        function landing(){
          window.alert("The shuttle is landing. Landing gear engaged."); 
              document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
              document.querySelector("#shuttleBackground").style["background-color"] = "limegreen"; //"green"; // if we need to be boring :)
              document.getElementById("spaceShuttleHeight").innerHTML = 0;
        }

        let landing_ButtonClick = document.getElementById("landing");
            landing_ButtonClick.addEventListener("click", landing);

        function abortMission(){
        let response = window.confirm("Confirm that you want to abort the mission.");
          if (response) {
            document.getElementById("flightStatus").innerHTML = "Mission aborted.";
            document.querySelector("#shuttleBackground").style["background-color"] = "darkgreen";
            document.getElementById("spaceShuttleHeight").innerHTML = 0;
          } else {
            console.log("**So we are not aborting the mission after all?***");
          }
      }

      let abortMission_ButtonClick = document.getElementById("missionAbort");
          abortMission_ButtonClick.addEventListener("click", abortMission);


      //***** Moving up, down, left, right:*****
      let rocket = document.querySelector("img");
      let moveUpDown = Number(rocket.style.top);
      let moveLeftRight = Number(rocket.style.left);

      function up(){
            moveUpDown -= 10;
            console.log(moveUpDown)
            rocket.style.top = moveUpDown + "px";

            let height = Number(document.getElementById("spaceShuttleHeight").innerHTML);
            height += 10000;
            document.getElementById("spaceShuttleHeight").innerHTML = height;
      }

      let up_ButtonClick = document.getElementById("upButton");
          up_ButtonClick.addEventListener("click", up);

      function down(){
            moveUpDown += 10;
            console.log(moveUpDown)
            rocket.style.top = moveUpDown + "px";

            let height = Number(document.getElementById("spaceShuttleHeight").innerHTML);
            height -= 10000;
            document.getElementById("spaceShuttleHeight").innerHTML = height;
      }

      let down_ButtonClick = document.getElementById("downButton");
          down_ButtonClick.addEventListener("click", down);

      function right(){
            moveLeftRight += 10;
            console.log(moveLeftRight)
            rocket.style.left = moveLeftRight + "px";
      }

      let right_ButtonClick = document.getElementById("rightButton");
          right_ButtonClick.addEventListener("click", right);
      
      function left(){
            moveLeftRight -= 10;
            console.log(moveLeftRight)
            rocket.style.left = moveLeftRight + "px";
      }

      let left_ButtonClick = document.getElementById("leftButton");
          left_ButtonClick.addEventListener("click", left);

  });
  
