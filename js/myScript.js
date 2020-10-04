const URL="https://covid19.mathdro.id/api";
let app = angular.module("MyApp",[]);
app.controller('MyCtrl',($scope,$http)=>{

    $scope.title="COVID 19 Tracker";

    $http.get(URL).then(
        (response)=>{
            $scope.all_data=response.data;
           
        },
        (error)=>{

        }
    );

    $scope.get_c_data= ()=>{
        let country =$scope.c;

     if(country=="")
        {
            $scope.c_data=undefined;
            return;
        }

         $http.get(`${URL}/countries/${country}`)
         .then((response)=>{
             console.log(response.data);
             $scope.c_data= response.data;
         },(error)=>{

             console.log(error);
         })
        
    };
});

