import { CmsModuleRoot, CmsWidgetPosition, AngularCmsModule } from '@angular-cms/core';
import { ContentFormEditComponent } from '../content/content-form-edit/content-form-edit.component';
import { MediaTreeComponent } from './media-tree.component';
import { MediaModule } from './media.module';

export function registerMediaModule() {
    AngularCmsModule.registerModule({
        module: MediaModule,
        roots: [
            {
                name: CmsModuleRoot.Editor,
                routes: [
                    {
                        path: 'content/media/:id',
                        component: ContentFormEditComponent
                    }
                ],
                widgets: [
                    {
                        component: MediaTreeComponent,
                        position: CmsWidgetPosition.Right,
                        group: "Medias"
                    }
                ]
            }
        ]

    })
}