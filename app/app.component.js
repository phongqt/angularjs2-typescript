System.register(['angular2/core', './student.service', './student-detail.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, student_service_1, student_detail_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (student_service_1_1) {
                student_service_1 = student_service_1_1;
            },
            function (student_detail_component_1_1) {
                student_detail_component_1 = student_detail_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_studentService) {
                    this._studentService = _studentService;
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.getStudents();
                };
                AppComponent.prototype.onSelect = function (student) {
                    this.selectStudent = student;
                };
                AppComponent.prototype.getStudents = function () {
                    return this.students = this._studentService.getStudents();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n      <ul class=\"heroes\">\n        <li *ngFor=\"#student of students\" (click) = \"onSelect(student)\">\n          <span class=\"badge\">{{student.name}}</span>\n        </li>\n      </ul>\n      <student-detail [student]=\"selectStudent\"></student-detail>\n    ",
                        styles: ["\n      .selected {\n        background-color: #CFD8DC !important;\n        color: white;\n      }\n      .heroes {\n        margin: 0 0 2em 0;\n        list-style-type: none;\n        padding: 0;\n        width: 10em;\n      }\n      .heroes li {\n        cursor: pointer;\n        position: relative;\n        left: 0;\n        background-color: #EEE;\n        margin: .5em;\n        padding: .3em 0em;\n        height: 1.6em;\n        border-radius: 4px;\n      }\n      .heroes li.selected:hover {\n        color: white;\n      }\n      .heroes li:hover {\n        color: #607D8B;\n        background-color: #EEE;\n        left: .1em;\n      }\n      .heroes .text {\n        position: relative;\n        top: -3px;\n      }\n      .heroes .badge {\n        display: inline-block;\n        font-size: small;\n        color: white;\n        padding: 0.8em 0.7em 0em 0.7em;\n        background-color: #607D8B;\n        line-height: 1em;\n        position: relative;\n        left: -1px;\n        top: -4px;\n        height: 1.8em;\n        margin-right: .8em;\n        border-radius: 4px 0px 0px 4px;\n      }\n  "],
                        directives: [student_detail_component_1.StudentDetailComponent],
                        providers: [student_service_1.StudentService]
                    }), 
                    __metadata('design:paramtypes', [student_service_1.StudentService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map