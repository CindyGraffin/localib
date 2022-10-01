import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RentingsComponent } from "./rentings.component";


const routes: Routes = [
    { path: "rentings", children: [
        {path: '', component: RentingsComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class RentingsRoutingModule {}