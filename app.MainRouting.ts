import { HomeComponent } from "../Home/app.HomeComponent";

export const MainRoutes = [

    {path: 'Home', component: HomeComponent},
    {path: '', component: HomeComponent},
    {path: 'Customer', loadChildren: () => import('../Customer/app.CustomerModule').then(x => x.CustomerModule)},
    {path: 'Supplier', loadChildren: () => import('../Supplier/app.SupplierModule').then(x => x.SupplierModule)},



    // {path: 'Customer', loadChildren: '../Customer/app.CustomerModule#CustomerModule'},
    // {path: 'Supplier', loadChildren: '../Supplier/app.SupplierModule#SupplierModule'},
]
