<template>
  <div class="pagination">
    <button @click="pageBack" :disabled="value == 1" class="pageup">
      上一页
    </button>
    <template v-if="pageSize < 6">
      <button
        class="page-btn"
        @click="pageChange(item)"
        v-for="(item, index) in pageSize"
        :key="index"
        :class="value == item ? 'page-btn-active' : ''"
      >
        {{ item }}
      </button>
    </template>
    <template v-else>
      <button
        class="page-btn"
        @click="pageChange(item)"
        v-for="(item, index) in pageRange"
        :key="index"
        :class="value == item ? 'page-btn-active' : ''"
      >
        {{ item }}
      </button>
      <img
        v-if="this.newValue < 3 || this.pageSize - this.newValue > 3"
        class="ellipses-icon"
        width="18"
        height="18"
        src="@/assets/image/更多@2x.png"
        alt
      />
      <button
        class="page-btn"
        @click="pageChange(pageSize)"
        :class="value == pageSize ? 'page-btn-active' : ''"
      >
        {{ pageSize }}
      </button>
    </template>

    <button @click="pageNext" class="pagedown">
      {{ this.value == this.pageSize ? "下一篇" : "下一页" }}
    </button>
  </div>
</template>
<script>
export default {
  name: "dz-pagination",
  props: ["value", "page-size"],
  data() {
    return {
      newValue: this.value,
      ellipses: false
    };
  },
  methods: {
    pageChange(page) {
      //分页器点击事件
      this.$emit('scollToTop')
      this.$emit('refreshAd')
      this.newValue = page;
      this.$router.push({
        name: 'artical',
        params: { id: this.$route.params.id, type: this.$route.params.type,page: page}
      })
    },
    pageBack() {
      //上一页
      this.$emit('scollToTop')
      this.$emit('refreshAd')
      this.newValue--;
      this.$router.push({
        name: 'artical',
        params: { id: this.$route.params.id, type: this.$route.params.type,page: this.newValue}
      })
    },
    pageNext() {
      this.$emit('scollToTop')
      this.$emit('refreshAd')
      if (this.value < this.pageSize) {
        //下一页
        this.newValue++;
        this.$router.push({
          name: 'artical',
          params: { id: this.$route.params.id, type: this.$route.params.type,page: this.newValue}
        })
      } else {
        //下一篇
        this.$emit("pageForward");
      }
    }
  },
  computed: {
    pageRange() {
      //分页器范围
      if (this.newValue < 3) {
        return [1, 2, 3];
      } else if (this.pageSize - this.newValue < 4) {
        return [
          this.pageSize - 4,
          this.pageSize - 3,
          this.pageSize - 2,
          this.pageSize - 1
        ];
      } else {
        return [this.newValue - 1, this.newValue, this.newValue + 1];
      }
    }
  },
  watch: {
    //实现v-model数据绑定
    value(newVal) {
      this.newValue = newVal;
    },
    newValue(newVal) {
      this.$emit("input", newVal);
    }
  },
  created() { }
};
</script>
<style lang="less" scoped>
.pagination {
  display: flex;
  display: -webkit-flex;
  display: -moz-flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1000;
  button {
    border: 1px solid rgba(220, 220, 220, 1);
    border-radius: 2px;
    background-color: transparent;
    color: #999;
    font-size: 15px;
  }
  .pageup,
  .pagedown {
    width: 60px;
    min-width: 50px;
    min-height: 40px;
  }
  .pageup {
    margin-right: 4.5px;
  }
  .pagedown {
    margin-left: 4.5px;
  }
  .page-btn {
    width: 40px;
    min-height: 40px;
    margin: 0 4.5px;
  }
  .page-btn.page-btn-active,
  .page-btn:active,
  .pagedown:active,
  .pageup:active {
    background-color: #007dd5;
    color: #fff;
    border: none;
  }
  .ellipses-icon {
    margin: 0 4.5px;
  }
}
</style>