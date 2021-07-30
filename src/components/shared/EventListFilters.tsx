import {FC} from 'react'
import styled from 'styled-components'
import {COLOR, BP} from '../../styles/constants'
import {EventCategory, EventListViewMode} from '../../utils/helper-functions'

interface Props {
  onFilterChange: any
  currentCategory: EventCategory
  viewModeClickHandler: any
  viewMode: EventListViewMode
  action?: boolean
  setActionTriggered?: React.Dispatch<React.SetStateAction<boolean>>
}

const CATEGORIES: Array<{key: EventCategory; label: string}> = [
  {
    label: 'ALL EVENTS',
    key: 'all',
  },
  {
    label: 'FUTURE EVENTS',
    key: 'future',
  },
  {
    label: 'PAST EVENTS',
    key: 'past',
  },
]

const EventListFilters: FC<Props> = ({
  onFilterChange,
  currentCategory,
  viewModeClickHandler,
  viewMode,
}): JSX.Element => {
  return (
    <Container>
      <ul>
        {CATEGORIES.map(({key, label}) => (
          <CategoryItem
            key={key}
            active={currentCategory === key}
            onClick={() => {
              onFilterChange(key)
            }}
          >
            {label}
          </CategoryItem>
        ))}
      </ul>

      <MobileCategorySelector>
        <p>SHOW:</p>
        <select
          value={currentCategory}
          onChange={({target}) => {
            onFilterChange(target.value as EventCategory)
          }}
        >
          {CATEGORIES.map(({key, label}) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
      </MobileCategorySelector>

      <div>
        <ViewModeItem
          src="/icons/grid-view.svg"
          active={viewMode === 'grid'}
          onClick={() => {
            viewModeClickHandler('grid')
          }}
        />
        <ViewModeItem
          src="/icons/list-view.svg"
          active={viewMode === 'list'}
          onClick={() => {
            viewModeClickHandler('list')
          }}
        />
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  /* Desktop category menu */
  > ul {
    display: flex;
    list-style: none;

    @media (max-width: ${BP.MOBILE}) {
      display: none;
    }
  }
`
const CategoryItem = styled.li<{active: boolean}>`
  font-size: 1.4rem;
  font-weight: 600;
  margin-right: 3rem;
  cursor: pointer;
  color: ${props => (props.active ? COLOR.GREY_TEXT_DARK : COLOR.GREY_TEXT_LIGHT)};

  :last-child {
    margin-right: 0;
  }
`
const ViewModeItem = styled.img<{active: boolean}>`
  margin-left: 1.5rem;
  opacity: ${props => (props.active ? 1 : 0.2)};
  cursor: pointer;

  :first-child {
    margin-left: 0;
  }
`
const MobileCategorySelector = styled.div`
  display: none;

  @media (max-width: ${BP.MOBILE}) {
    display: flex;
    align-items: center;

    /* 'SHOW:' label */
    > p {
      font-size: 1.4rem;
      font-weight: 600;
      margin-right: 1rem;
    }
  }
`

export default EventListFilters
