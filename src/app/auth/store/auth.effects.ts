import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, exhaustMap } from 'rxjs/operators';

import * as AuthActions from './auth.actions';
import { AuthService } from '../auth.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

@Injectable()
export class AuthEffects {

    // public authLogin$ = createEffect(() => this.actions$.pipe(
    //     ofType(AuthActions.loginStart),
    //     exhaustMap(action => {
    //         this.authService.login(action.email, action.password);
    //     })
    // ));
    public authLogin$ = createEffect(() => this.actions$.pipe(
        ofType(AuthActions.loginStart),
        switchMap(authData => {
            return this.http.post<AuthResponseData>(
                'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=' + environment.firebaseAPIKey,
                {
                    email: authData.email,
                    password: authData.password,
                    returnSecureToken: true
                }
            );
        })
    ));

    constructor(private actions$: Actions, private authService: AuthService, private http: HttpClient) {

    }
}
