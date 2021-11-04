import styled from 'styled-components';
import getTheme, { fontSizesCSS } from '../../style/themes/theme';

const theme: any = getTheme();

export const ModalOverlay = styled.div`
  overflow-y: initial !important;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9099;
  background-color: ${theme.palette.background.modal};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  min-height: 200px;
  background-color: ${theme.palette.background.container};
  color: ${theme.palette.white.main};
  margin: 0 auto;
  width: 40%;
  padding: 80px 112px;
    @include xxl {
      padding: 60px 84px;
    }
    @include xl {
      padding: 50px 70px;
    }
    @include lg {
      padding: 40px 56px;
    }
`;

export const ModalTitle = styled.div`
  display: inline-block;
  position: absolute!important;
  text-align: center;
  line-height: 1.33;
  font-size: ${fontSizesCSS.fs32lh40ls0};
  height: 64px;
  margin-top: 60px;
  &:empty {
    display: none;
  }
`;

export const ModalContent = styled.div`
  width: 100%;
  margin-top: 32px;
  height: 144px;
    @include xxl {
      margin-top: 24px;
      height: 108px;
    }
    @include xl {
      margin-top: 20px;
      height: 90px;
    }
    @include lg {
      margin-top: 16px;
      height: 72px;
    }
`;

export const ModalEntry = styled.div`
      width: 100%;
      margin-top: 32px;
      height: 144px;
      padding: 0 112px;
    @include xxl {
      margin-top: 24px;
      height: 108px;
      padding: 0 50px;
    }
    @include xl {
      margin-top: 20px;
      height: 90px;
    }
    @include lg {
      margin-top: 16px;
      height: 72px;
    }
      &:first-child {
        padding-top: 0;
      }
      input {
        width: 100%;
        background-color: #242424;
        border: 0;
        height: 56px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        outline: none;
        color: rgba(255, 255, 255, 0.7);
      @include xxl {
        height: 42px;
      }
      @include xl {
        height: 35px;
      }
      @include lg {
        height: 28px;
      }
        &:focus {
          color: rgba(255, 255, 255, 1);
        }
      }
      label {
        font-size: 24px;
        line-height: 1.4;
        vertical-align: top;
        width: 100%;
        color: rgba(255, 255, 255, 0.5);
        height: 32px;
      @include xxl {
        font-size: ${fontSizesCSS.fs24lh32ls25};
        height: 24px;
      }
      @include xl {
        font-size: ${fontSizesCSS.fs16lh24ls44};
        height: 20px;
      }
      @include lg {
        font-size: ${fontSizesCSS.fs12lh16ls4};
        height: 16px;
      }
        &.error {
          color: #f44336;
          margin-bottom: 0;
        }
        &.warning {
          color: #FFFF00;
          margin-bottom: 0;
        }
  }
`;

export const ModalButtonWrapper = styled.div`
      float: right;
    @include xxl {
      margin: 36px;
    }
    @include xl {
      margin: 30px;
    }
    @include lg {
      margin: 24px;
    }

  .modal-button {
    display: inline-block;
    border-radius: 8px;
    text-align: center;
    text-decoration: none;
    font-size: 24px;
    cursor: pointer;
    line-height: 28px;
    color: ${theme.palette.white.main};
    margin: 16px;
    border: 1px solid transparent;
    outline: none;
    white-space: nowrap;
  @include xxl {
    font-size: 18px;
    border-radius: 6px;
    height: 48px;
    line-height: 21px;
    padding: 13px 36px;
    margin: 0 12px;
  }
  @include xl {
    font-size: 15px;
    border-radius: 5px;
    height: 40px;
    line-height: 18px;
    padding: 11px 30px;
    margin: 0 10px;
  }
  @include lg {
    font-size: 12px;
    border-radius: 4px;
    height: 32px;
    line-height: 14px;
    padding: 9px 24px;
    margin: 0 8px;
  }
  }
`;
