Memo commandes NX:

npx create-nx-workspace@latest my-nx-workspace --preset=angular-monorepo

nx g @nx/angular:app apps/my-app
nx g @nx/angular:lib libs/my-lib
nx show projects

nx g  @nx/angular:component  apps/my-app/src/app/cxy/cxy  --type=component

set NX_DEFAULT_PROJECT=my-lib ou my-app
nx g  @nx/angular:service  common/service/context --type=service 

=============================================================
si ce genre d'erreur:

 NX   Failed to process project graph.

The projects in the following directories have no name provided:
  - .angular/cache/21.2.11/my-app/vite/deps

  =====
  Alors supprimer .angular/cache
  ET RECOMMENCER