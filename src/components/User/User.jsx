import React, {PureComponent} from 'react';

export default class User extends PureComponent {
    render() {
        const {user} = this.props;
        return (
            <div>
                <h3>{user.firstName}, {user.lastName}</h3>
                <a href={`mailto:${user.email}`}>Написать и отправить электропочту</a>
            </div>
        );
    }
}