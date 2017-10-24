import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [
        './styles/frame-theme/css-reset.scss',
        './app.component.scss',
        './widgets/widget.scss',
        './styles/frame-theme/_theme.scss',
        './styles/common.scss',
        './styles/description/code.css',
    ],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    menuActive: boolean;
    constructor() { }

    /**
     * 更换主题皮肤
     * @param event 
     * @param theme
     */
    changeTheme(event: Event, theme: string): void {
        // @temp 暂不支持
        // let themeLink: HTMLLinkElement = <HTMLLinkElement> document.getElementById('theme-css');
        // themeLink.href = 'assets/components/themes/' + theme + '/theme.css';
        event.preventDefault();
    }
}
