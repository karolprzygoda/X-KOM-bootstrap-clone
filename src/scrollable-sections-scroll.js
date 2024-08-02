document.addEventListener("DOMContentLoaded", function () {
  const newItemsScrollRightBtn = document.getElementById("new-items-next");
  const newItemsScrollLeftBtn = document.getElementById("new-items-prev");
  const discountScrollLeftBtn = document.getElementById(
    "discount-section__scrollable-items-prev",
  );
  const discountScrollRightBtn = document.getElementById(
    "discount-section__scrollable-items-next",
  );
  const newItemsScrollableContainer = document.getElementById(
    "recommended-section__scrollable-container",
  );
  const discountScrollableContainer = document.getElementById(
    "discount-section__scrollable-container",
  );
  const newsScrollableContainer = document.getElementById(
    "news-section__scrollable-container",
  );
  const newsScrollLeftBtn = document.getElementById(
    "news-section__scrollable-items-prev",
  );
  const newsScrollRightBtn = document.getElementById(
    "news-section__scrollable-items-right",
  );
  const brandsScrollRightBtn = document.getElementById(
    "brands-section__items-next",
  );
  const brandsScrollLeftBtn = document.getElementById(
    "brands-section__items-prev",
  );
  const brandsScrollableContainer = document.getElementById(
    "brands-section__scrollable-container",
  );
  const deviceWidth = window.innerWidth;
  const newItemsScrollAmount = deviceWidth * 0.95;
  let discountScrollAmount;

  if (deviceWidth >= 1200) {
    discountScrollAmount = 1315;
  } else {
    discountScrollAmount = 955;
  }

  newItemsScrollRightBtn.addEventListener("click", function () {
    newItemsScrollableContainer.scrollBy({
      left: newItemsScrollAmount,
      behavior: "smooth",
    });
  });

  newItemsScrollLeftBtn.addEventListener("click", function () {
    newItemsScrollableContainer.scrollBy({
      left: -newItemsScrollAmount,
      behavior: "smooth",
    });
  });

  discountScrollRightBtn.addEventListener("click", function () {
    discountScrollableContainer.scrollBy({
      left: discountScrollAmount,
      behavior: "smooth",
    });
  });

  discountScrollLeftBtn.addEventListener("click", function () {
    discountScrollableContainer.scrollBy({
      left: -discountScrollAmount,
      behavior: "smooth",
    });
  });

  newsScrollLeftBtn.addEventListener("click", function () {
    newsScrollableContainer.scrollBy({
      left: -discountScrollAmount,
      behavior: "smooth",
    });
  });

  newsScrollRightBtn.addEventListener("click", function () {
    newsScrollableContainer.scrollBy({
      left: discountScrollAmount,
      behavior: "smooth",
    });
  });

  brandsScrollRightBtn.addEventListener("click", function () {
    brandsScrollableContainer.scrollBy({
      left: discountScrollAmount,
      behavior: "smooth",
    });
  });

  brandsScrollLeftBtn.addEventListener("click", function () {
    brandsScrollableContainer.scrollBy({
      left: -discountScrollAmount,
      behavior: "smooth",
    });
  });
});
