import { useRouter } from "next/router";
import { useAtom } from "jotai";
import { searchHistoryAtom } from "../store";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from 'react-bootstrap/Button';
import styles from '../styles/History.module.css';
import { removeFromHistory } from '../lib/userData';

export default function History() {
  const router = useRouter();
  const [searchHistory, setSearchHistory] = useAtom(searchHistoryAtom);

  if(!searchHistory) return null;

  let parsedHistory = [];
  searchHistory.forEach((h) => {
    let params = new URLSearchParams(h);
    let entries = params.entries();
    parsedHistory.push(Object.fromEntries(entries));
  });
  function historyClicked(e, index) {
    e.preventDefault();
    router.push(`/artwork?${searchHistory[index]}`);
  }

  async function removeHistoryClicked(e, index) {
    e.stopPropagation(); // stop the event from trigging other events
    setSearchHistory(await removeFromHistory(searchHistory[index]));
  }

  if (parsedHistory.length == 0) {
    return (
      <>
        <Row className="gy-4">
          <Card>
            <Card.Body>
                <h4>Nothing Here</h4>
                <br />
                Try searching for something else
            </Card.Body>
          </Card>
        </Row>
      </>
    );
  } else {
    return (
      <ListGroup>
        {parsedHistory?.map((historyItem, index) => (
          <ListGroup.Item key={index} onClick={(e)=>historyClicked(e,index)} className={styles.historyListItem}>
            {Object.keys(historyItem).map((key) => (
              <>
                {key}: <strong>{historyItem[key]}</strong>&nbsp;
              </>
            ))}
            <Button className="float-end" variant="danger" size="sm" onClick={e => removeHistoryClicked(e, index)}>&times;</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
}