import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { fetchApi, fetchImages } from "../../api";
import { Score } from "../../components/Score";
import Review from "../../components/Review";
import {
  Container,
  ImageContainer,
  Info,
  Line,
  Recommend,
  ReviewContainer,
  Wrapper,
} from "./style";

export default function Store() {
  const [store, setStore] = useState({});
  const [reviews, setReviews] = useState([]);
  const [recommend, setRecommend] = useState([]);
  const { storeId } = useParams();
  const history = useHistory();

  function getMenuString(menus) {
    if (!menus) return "";
    const menuString = menus.map((m) => m.name).join(", ");
    return menuString;
  }

  function getSortedReviews(reviews) {
    const newReviews = [...reviews];
    newReviews.sort((r1, r2) => new Date(r2.regTime) - new Date(r1.regTime));
    return newReviews;
  }

  function getTags(categories) {
    if (!categories) return "";
    const tags = categories.map((c) => `#${c.name}`).join(" ");
    return tags;
  }

  function getStore() {
    fetchApi(`/api/store/${storeId}`)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return;
        }
      })
      .then((data) => {
        if (data) {
          setStore(data.storeInfo);
          setReviews(getSortedReviews(data.storeInfo.reviews));
          setRecommend(data.nearbyStores);
        }
      })
      .catch((err) => console.log(err));
  }

  async function addImagesToStore() {
    if (!store.name) return;
    if (store.imgUrls) return;
    const newStore = { ...store };
    const res = await fetchImages(newStore, 30);
    if (res.status === 200) {
      const data = await res.json();
      const images = data?.documents
        .map((item) => item.image_url)
        .filter((img) => !img.includes("postfiles") && !img.includes("naver"));
      newStore.imgUrls = images;
    }
    setStore(newStore);
  }

  async function addImageToSide() {
    if (recommend.length < 1) return;
    if (recommend[0].imgUrl) return;
    const newRecommend = [...recommend];
    for (let i = 0; i < newRecommend.length; i++) {
      const res = await fetchImages(newRecommend[i], 1);
      if (res.status === 200) {
        const data = await res.json();
        const images = data?.documents.map((item) => item.thumbnail_url);
        newRecommend[i].imgUrl = images.length > 0 ? images[0] : "none";
      }
    }
    setRecommend(newRecommend);
  }

  useEffect(() => {
    getStore();
  }, [storeId]);
  useEffect(() => {
    addImagesToStore();
  }, [store]);
  useEffect(() => {
    addImageToSide();
  }, [recommend]);

  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          {store.imgUrls &&
            store.imgUrls.map((url, i) => (
              <div className="item" key={i}>
                <img
                  src={url}
                  alt=""
                  onError={(e) => {
                    // e.target.src = "/images/default_store.png";
                    e.target.style.display = "none";
                  }}
                />
              </div>
            ))}
        </ImageContainer>
        <div className="bottom">
          <div className="left">
            <Info>
              <div className="top">
                <div className="title">{store.name}</div>
                <div className="score">
                  <Score score={store.score} size={25} />
                </div>
              </div>
              <div className="tags">{getTags(store.storeCategories)}</div>
              <Line />
              <div className="line">
                <div className="key">??????</div>
                <div className="value">{store.address}</div>
              </div>
              <div className="line">
                <div className="key">????????????</div>
                <div className="value">{store.tel}</div>
              </div>
              <div className="line">
                <div className="key">??????</div>
                <div className="value">{getMenuString(store.menus)}</div>
              </div>
              <Line />
            </Info>
            <div className="add-review">
              <button
                onClick={() => {
                  history.push(`/review/${storeId}`);
                }}
              >
                ?????? ??????
              </button>
            </div>
            <ReviewContainer>
              {reviews.map((review, i) => (
                <Review review={review} key={i} />
              ))}
            </ReviewContainer>
          </div>
          <Recommend>
            <h3>?????? ??????</h3>
            <div className="list">
              {recommend.map((item, i) => (
                <div
                  className="item"
                  key={i}
                  onClick={() => {
                    history.push(`/store/${item.storeId}`);
                  }}
                >
                  <div className="left">
                    <img
                      src={item.imgUrl ? item.imgUrl : ""}
                      alt=""
                      onError={(e) => {
                        e.target.src = "/images/default_store.png";
                      }}
                    />
                  </div>
                  <div className="right">
                    <div className="name">{item.name}</div>
                    <div className="tags">{getTags(item.storeCategories)}</div>
                    <div className="score">
                      <Score score={item.score} size={14} />
                    </div>
                    <div className="address">{item.address}</div>
                  </div>
                </div>
              ))}
            </div>
          </Recommend>
        </div>
      </Wrapper>
    </Container>
  );
}
