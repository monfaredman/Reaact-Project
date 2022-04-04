if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    function (position) {
      console.log(1, position);
    },
    function () {
      alert("h");
    }
  );
