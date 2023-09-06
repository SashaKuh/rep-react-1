import { Item, Label, Percentage, SectionStatistics, StatList, Title } from './Statistics.styled';

export const Statistics = ({title, stats}) => {
    return(
        <SectionStatistics>
            {title && <Title>{title}</Title>}
            <StatList>
            {stats.map((el, _, arr)=> {
                return(
                    <Item 
                    key={el.id}
                    quantuty={arr.length}
                    >
                        <Label>{el.label}</Label>
                        <Percentage>{el.percentage}%</Percentage>
                    </Item>
                )
            })}
            </StatList>
        
        </SectionStatistics>
    )
}