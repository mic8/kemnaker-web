import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {User} from '@kemnaker/user/domains/models/user';
import {AuthStore} from '@kemnaker/auth/domains/store';

@Component({
    selector: 'kemnaker-default-template',
    templateUrl: './default.template.html',
})
export class DefaultTemplate implements AfterViewInit {
    @ViewChild('navbarToggler') public navbarToggler: ElementRef;
    @ViewChild('navbarNav') public navbarNav: ElementRef;
    @ViewChild('modalService') public modalService: ElementRef;
    @ViewChild('dropdownMenu') public dropdownMenu: ElementRef;
    @ViewChild('navbar') public navbar: ElementRef;

    public title: string = 'Kemnaker';
    public user$: Observable<User | null>;

    public constructor(private router: Router, private authStore: AuthStore) {
        this.user$ = this.authStore.getAuthenticatedUser();
    }

    public ngAfterViewInit(): void {
        window.addEventListener('scroll', (e: any) => {
            if (window.scrollY > 90) {
                this.navbar.nativeElement.classList.add('active');
            } else {
                this.navbar.nativeElement.classList.remove('active');
            }
        });
    }

    public toggleNav(): void {
        this.navbarToggler.nativeElement.classList.toggle('collapsed');

        if (this.navbarNav.nativeElement.classList.contains('collapsed')) {
            this.navbarNav.nativeElement.classList.remove('collapsed');
            this.navbarNav.nativeElement.classList.add('show');
        } else {
            this.navbarNav.nativeElement.classList.add('collapsed');
            this.navbarNav.nativeElement.classList.remove('show');
        }
    }

    public toggleModalService(): void {
        this.modalService.nativeElement.classList.toggle('show');

        if (this.modalService.nativeElement.classList.contains('show')) {
            this.modalService.nativeElement.style.display = 'block';
        } else {
            this.modalService.nativeElement.style.display = 'none';
        }
    }

    public showUnit(): void {
        this.dropdownMenu.nativeElement.classList.remove('show');
        this.router.navigateByUrl('/unit');
    }
}
