import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VehiclesComponent } from "./vehicles.component";


const routes: Routes = [
    { path: "vehicles", children: [
        {path: '', component: VehiclesComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class VehiclesRoutingModule {}
