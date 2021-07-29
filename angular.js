var  app=angular.module("todoList",[]);
	app.controller("listCtrl",function($scope){
		$scope.list = [];
		$scope.tempList=[];
		$scope.isShow=true;
		$scope.showNumber=false;
		$scope.selectedTab=1;
		$scope.totalTask = 0;
		$scope.completeTask=0;
		$scope.addTask=function(){
			$scope.errorText="";
			if(!$scope.addMe){
				alert("Task is required.");
				return;
			}
			else if($scope.list.indexOf($scope.addMe) == -1){
				$scope.list.push({text:$scope.addMe,checked:false});
				$scope.addMe="";
				$scope.totalTask += 1;

			}else{
				alert("The item is already in your shopping list.");
			}
			
			$scope.tempList=$scope.list;
		}
		$scope.deleteTask=function(index,checked){
			$scope.tempList.splice(index,1);
			if(checked){
				$scope.completeTask -=1;
			}

			$scope.totalTask -=1;			
			$scope.list=$scope.tempList;
		}
		$scope.removeTask=function(index,checked){
			if(checked){
				$scope.completeTask +=1;
			}else{
				$scope.completeTask -=1;
			}

			$scope.list[index].checked=checked;
			$scope.tempList[index].checked=checked;

		}
		$scope.tabChange=function(tabNo){
			$scope.selectedTab=tabNo;
			switch(tabNo){
				case 1:				
					$scope.list = $scope.tempList;
					$scope.isShow=true;
					 $scope.showNumber=false;
					break;
				case 2:
		                $scope.list=[];
		                $scope.isShow=false;
		                $scope.showNumber=true;
						angular.forEach($scope.tempList, function (value, key) {
			                if(!value.checked){
						$scope.list.push({text:value.text,checked:value.checked});
			                }else{
			                	return false;
			                }
		            	}); 
					break;
				case 3:
					$scope.list=[];
					$scope.isShow=false;
					$scope.showNumber=true;
						angular.forEach($scope.tempList, function (value, key) {
			                if(value.checked){
						$scope.list.push({text:value.text,checked:value.checked});
			                }else{
			                	return false;
			                }
		            	});
					break;
			}
		}
	})
