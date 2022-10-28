import { HeaderName } from '../../style/ComponentStyles';

export const Header = ({
    title,
    JustifyContent,
    AlignItems,
    FlexDirection,
    Width,
    Margin,
    Padding,
    children,
}) => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: JustifyContent || 'start',
                alignItems: AlignItems || 'start',
                flexDirection: FlexDirection || 'column',
                width: '100%',
                maxWidth: Width,
                margin: Margin,
                padding: Padding,
            }}>
            <HeaderName>{title}</HeaderName>
            {children}
        </div>
    );
};
