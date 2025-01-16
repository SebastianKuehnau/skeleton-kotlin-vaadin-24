import {Button, HorizontalLayout, Notification, TextField} from '@vaadin/react-components';
import {HelloEndpoint, KotlinEndpoint} from 'Frontend/generated/endpoints.js';
import {useSignal} from '@vaadin/hilla-react-signals';
import type {ViewConfig} from '@vaadin/hilla-file-router/types.js';

export const config: ViewConfig = {
    title: "Main-Hilla",
    menu: {
        title: 'Main-Hilla',
        icon: "line-awesome/svg/react.svg"
    },
};

export default function MainView() {
    const name = useSignal('');

    return (
        <HorizontalLayout className="flex p-m gap-m items-end">
            <TextField
                label="Your name"
                onValueChanged={(e) => {
                    name.value = e.detail.value;
                }}
            />
            <Button
                onClick={async () => {
                    const serverResponse = await KotlinEndpoint.sayHello(name.value);
                    Notification.show(serverResponse);
                }}>
                Say hello
            </Button>
        </HorizontalLayout>
    );
}
