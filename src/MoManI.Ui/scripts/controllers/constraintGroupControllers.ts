﻿import $ = require('jquery');
import application = require('application');
import constraintGroupModel = require('models/constraintGroup');
import constraintGroupService = require('services/constraintGroupService');

var forceLoad = [constraintGroupService];

export interface IConstraintGroupDetailsScope extends ng.IScope {
    constraintGroup: constraintGroupModel.ConstraintGroup;
    detailsForm: angular.IFormController;
    save: () => void;
}

export class ConstraintGroupDetailsController {
    constructor($scope: IConstraintGroupDetailsScope, $routeParams: angular.route.IRouteParamsService, $window: angular.IWindowService, $modal: angular.ui.bootstrap.IModalService, $q: angular.IQService,
        ConstraintGroupService: angular.resource.IResourceClass<IConstraintGroupResource>
    ) {
        var constraintGroupReq: ng.IPromise<IConstraintGroup>;
        if ($routeParams['id'] === 'new') {
            var deferred = $q.defer();
            constraintGroupReq = deferred.promise;
            deferred.resolve(null);
        } else {
            constraintGroupReq = ConstraintGroupService.get({ id: $routeParams['id'] }).$promise;
        }

        $q.when(constraintGroupReq).then(data => {
            $scope.constraintGroup = new constraintGroupModel.ConstraintGroup(data);
        });

        $scope.save = () => {
            if ($scope.detailsForm.$invalid)
                return;
            ConstraintGroupService.save($scope.constraintGroup.serialize(), () => {
                $window.location.href = '#/constraints';
            }, () => {
                alert('An error occured');
            });
        };
    }
}