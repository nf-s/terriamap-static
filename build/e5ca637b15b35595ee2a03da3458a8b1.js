!function(){"use strict";const{Array:e,Object:t,Number:n,Math:s,Error:r,Uint8Array:a,Uint16Array:o,Uint32Array:i,Int32Array:c,Map:l,DataView:u,Promise:h,TextEncoder:f,crypto:p,postMessage:d,TransformStream:g,ReadableStream:w,WritableStream:y,CompressionStream:m,DecompressionStream:_}=self;class b{constructor(e){return class extends g{constructor(t,n){const s=new e(n);super({transform(e,t){t.enqueue(s.append(e))},flush(e){const t=s.flush();t&&e.enqueue(t)}})}}}}const v=[];for(let e=0;256>e;e++){let t=e;for(let e=0;8>e;e++)1&t?t=t>>>1^3988292384:t>>>=1;v[e]=t}class S{constructor(e){this.crc=e||-1}append(e){let t=0|this.crc;for(let n=0,s=0|e.length;s>n;n++)t=t>>>8^v[255&(t^e[n])];this.crc=t}get(){return~this.crc}}class k extends g{constructor(){const e=new S;super({transform(t){e.append(t)},flush(t){const n=new a(4);new u(n.buffer).setUint32(0,e.get()),t.enqueue(n)}})}}const D={concat(e,t){if(0===e.length||0===t.length)return e.concat(t);const n=e[e.length-1],s=D.getPartial(n);return 32===s?e.concat(t):D._shiftRight(t,s,0|n,e.slice(0,e.length-1))},bitLength(e){const t=e.length;if(0===t)return 0;const n=e[t-1];return 32*(t-1)+D.getPartial(n)},clamp(e,t){if(32*e.length<t)return e;const n=(e=e.slice(0,s.ceil(t/32))).length;return t&=31,n>0&&t&&(e[n-1]=D.partial(t,e[n-1]&2147483648>>t-1,1)),e},partial:(e,t,n)=>32===e?t:(n?0|t:t<<32-e)+1099511627776*e,getPartial:e=>s.round(e/1099511627776)||32,_shiftRight(e,t,n,s){for(void 0===s&&(s=[]);t>=32;t-=32)s.push(n),n=0;if(0===t)return s.concat(e);for(let r=0;r<e.length;r++)s.push(n|e[r]>>>t),n=e[r]<<32-t;const r=e.length?e[e.length-1]:0,a=D.getPartial(r);return s.push(D.partial(t+a&31,t+a>32?n:s.pop(),1)),s}},z={bytes:{fromBits(e){const t=D.bitLength(e)/8,n=new a(t);let s;for(let r=0;t>r;r++)0==(3&r)&&(s=e[r/4]),n[r]=s>>>24,s<<=8;return n},toBits(e){const t=[];let n,s=0;for(n=0;n<e.length;n++)s=s<<8|e[n],3==(3&n)&&(t.push(s),s=0);return 3&n&&t.push(D.partial(8*(3&n),s)),t}}},C={sha1:function(e){e?(this._h=e._h.slice(0),this._buffer=e._buffer.slice(0),this._length=e._length):this.reset()}};C.sha1.prototype={blockSize:512,reset(){const e=this;return e._h=this._init.slice(0),e._buffer=[],e._length=0,e},update(e){const t=this;"string"==typeof e&&(e=z.utf8String.toBits(e));const n=t._buffer=D.concat(t._buffer,e),s=t._length,a=t._length=s+D.bitLength(e);if(a>9007199254740991)throw new r("Cannot hash more than 2^53 - 1 bits");const o=new i(n);let c=0;for(let e=t.blockSize+s-(t.blockSize+s&t.blockSize-1);a>=e;e+=t.blockSize)t._block(o.subarray(16*c,16*(c+1))),c+=1;return n.splice(0,16*c),t},finalize(){const e=this;let t=e._buffer;const n=e._h;t=D.concat(t,[D.partial(1,1)]);for(let e=t.length+2;15&e;e++)t.push(0);for(t.push(s.floor(e._length/4294967296)),t.push(0|e._length);t.length;)e._block(t.splice(0,16));return e.reset(),n},_init:[1732584193,4023233417,2562383102,271733878,3285377520],_key:[1518500249,1859775393,2400959708,3395469782],_f:(e,t,n,s)=>e>19?e>39?e>59?e>79?void 0:t^n^s:t&n|t&s|n&s:t^n^s:t&n|~t&s,_S:(e,t)=>t<<e|t>>>32-e,_block(t){const n=this,r=n._h,a=e(80);for(let e=0;16>e;e++)a[e]=t[e];let o=r[0],i=r[1],c=r[2],l=r[3],u=r[4];for(let e=0;79>=e;e++){16>e||(a[e]=n._S(1,a[e-3]^a[e-8]^a[e-14]^a[e-16]));const t=n._S(5,o)+n._f(e,i,c,l)+u+a[e]+n._key[s.floor(e/20)]|0;u=l,l=c,c=n._S(30,i),i=o,o=t}r[0]=r[0]+o|0,r[1]=r[1]+i|0,r[2]=r[2]+c|0,r[3]=r[3]+l|0,r[4]=r[4]+u|0}};const I={getRandomValues(e){const t=new i(e.buffer),n=e=>{let t=987654321;const n=4294967295;return()=>(t=36969*(65535&t)+(t>>16)&n,(((t<<16)+(e=18e3*(65535&e)+(e>>16)&n)&n)/4294967296+.5)*(s.random()>.5?1:-1))};for(let r,a=0;a<e.length;a+=4){const e=n(4294967296*(r||s.random()));r=987654071*e(),t[a/4]=4294967296*e()|0}return e}},R={importKey:e=>new R.hmacSha1(z.bytes.toBits(e)),pbkdf2(e,t,n,s){if(n=n||1e4,0>s||0>n)throw new r("invalid params to pbkdf2");const a=1+(s>>5)<<2;let o,i,c,l,h;const f=new ArrayBuffer(a),p=new u(f);let d=0;const g=D;for(t=z.bytes.toBits(t),h=1;(a||1)>d;h++){for(o=i=e.encrypt(g.concat(t,[h])),c=1;n>c;c++)for(i=e.encrypt(i),l=0;l<i.length;l++)o[l]^=i[l];for(c=0;(a||1)>d&&c<o.length;c++)p.setInt32(d,o[c]),d+=4}return f.slice(0,s/8)},hmacSha1:class{constructor(e){const t=this,n=t._hash=C.sha1,s=[[],[]],r=n.prototype.blockSize/32;t._baseHash=[new n,new n],e.length>r&&(e=n.hash(e));for(let t=0;r>t;t++)s[0][t]=909522486^e[t],s[1][t]=1549556828^e[t];t._baseHash[0].update(s[0]),t._baseHash[1].update(s[1]),t._resultHash=new n(t._baseHash[0])}reset(){const e=this;e._resultHash=new e._hash(e._baseHash[0]),e._updated=!1}update(e){this._updated=!0,this._resultHash.update(e)}digest(){const e=this,t=e._resultHash.finalize(),n=new e._hash(e._baseHash[1]).update(t).finalize();return e.reset(),n}encrypt(e){if(this._updated)throw new r("encrypt on already updated hmac called!");return this.update(e),this.digest(e)}}},A=void 0!==p&&"function"==typeof p.getRandomValues,q="Invalid password",B="Invalid signature";function H(e){return A?p.getRandomValues(e):I.getRandomValues(e)}const K=16,V={name:"PBKDF2"},x=t.assign({hash:{name:"HMAC"}},V),T=t.assign({iterations:1e3,hash:{name:"SHA-1"}},V),E=["deriveBits"],P=[8,12,16],M=[16,24,32],N=10,U=[0,0,0,0],W="undefined",L="function",F=typeof p!=W,G=F&&p.subtle,O=F&&typeof G!=W,X=z.bytes,j=class{constructor(e){const t=this;t._tables=[[[],[],[],[],[]],[[],[],[],[],[]]],t._tables[0][0][0]||t._precompute();const n=t._tables[0][4],s=t._tables[1],a=e.length;let o,i,c,l=1;if(4!==a&&6!==a&&8!==a)throw new r("invalid aes key size");for(t._key=[i=e.slice(0),c=[]],o=a;4*a+28>o;o++){let e=i[o-1];(o%a==0||8===a&&o%a==4)&&(e=n[e>>>24]<<24^n[e>>16&255]<<16^n[e>>8&255]<<8^n[255&e],o%a==0&&(e=e<<8^e>>>24^l<<24,l=l<<1^283*(l>>7))),i[o]=i[o-a]^e}for(let e=0;o;e++,o--){const t=i[3&e?o:o-4];c[e]=4>=o||4>e?t:s[0][n[t>>>24]]^s[1][n[t>>16&255]]^s[2][n[t>>8&255]]^s[3][n[255&t]]}}encrypt(e){return this._crypt(e,0)}decrypt(e){return this._crypt(e,1)}_precompute(){const e=this._tables[0],t=this._tables[1],n=e[4],s=t[4],r=[],a=[];let o,i,c,l;for(let e=0;256>e;e++)a[(r[e]=e<<1^283*(e>>7))^e]=e;for(let u=o=0;!n[u];u^=i||1,o=a[o]||1){let a=o^o<<1^o<<2^o<<3^o<<4;a=a>>8^255&a^99,n[u]=a,s[a]=u,l=r[c=r[i=r[u]]];let h=16843009*l^65537*c^257*i^16843008*u,f=257*r[a]^16843008*a;for(let n=0;4>n;n++)e[n][u]=f=f<<24^f>>>8,t[n][a]=h=h<<24^h>>>8}for(let n=0;5>n;n++)e[n]=e[n].slice(0),t[n]=t[n].slice(0)}_crypt(e,t){if(4!==e.length)throw new r("invalid aes block size");const n=this._key[t],s=n.length/4-2,a=[0,0,0,0],o=this._tables[t],i=o[0],c=o[1],l=o[2],u=o[3],h=o[4];let f,p,d,g=e[0]^n[0],w=e[t?3:1]^n[1],y=e[2]^n[2],m=e[t?1:3]^n[3],_=4;for(let e=0;s>e;e++)f=i[g>>>24]^c[w>>16&255]^l[y>>8&255]^u[255&m]^n[_],p=i[w>>>24]^c[y>>16&255]^l[m>>8&255]^u[255&g]^n[_+1],d=i[y>>>24]^c[m>>16&255]^l[g>>8&255]^u[255&w]^n[_+2],m=i[m>>>24]^c[g>>16&255]^l[w>>8&255]^u[255&y]^n[_+3],_+=4,g=f,w=p,y=d;for(let e=0;4>e;e++)a[t?3&-e:e]=h[g>>>24]<<24^h[w>>16&255]<<16^h[y>>8&255]<<8^h[255&m]^n[_++],f=g,g=w,w=y,y=m,m=f;return a}},J=class{constructor(e,t){this._prf=e,this._initIv=t,this._iv=t}reset(){this._iv=this._initIv}update(e){return this.calculate(this._prf,e,this._iv)}incWord(e){if(255==(e>>24&255)){let t=e>>16&255,n=e>>8&255,s=255&e;255===t?(t=0,255===n?(n=0,255===s?s=0:++s):++n):++t,e=0,e+=t<<16,e+=n<<8,e+=s}else e+=1<<24;return e}incCounter(e){0===(e[0]=this.incWord(e[0]))&&(e[1]=this.incWord(e[1]))}calculate(e,t,n){let s;if(!(s=t.length))return[];const r=D.bitLength(t);for(let r=0;s>r;r+=4){this.incCounter(n);const s=e.encrypt(n);t[r]^=s[0],t[r+1]^=s[1],t[r+2]^=s[2],t[r+3]^=s[3]}return D.clamp(t,r)}},Q=R.hmacSha1;let Y=F&&O&&typeof G.importKey==L,Z=F&&O&&typeof G.deriveBits==L;class $ extends g{constructor({password:e,signed:n,encryptionStrength:s}){super({start(){t.assign(this,{ready:new h((e=>this.resolveReady=e)),password:e,signed:n,strength:s-1,pending:new a})},async transform(e,t){const n=this,{password:s,strength:o,resolveReady:i,ready:c}=n;s?(await(async(e,t,n,s)=>{const a=await ne(e,t,n,re(s,0,P[t])),o=re(s,P[t]);if(a[0]!=o[0]||a[1]!=o[1])throw new r(q)})(n,o,s,re(e,0,P[o]+2)),e=re(e,P[o]+2),i()):await c;const l=new a(e.length-N-(e.length-N)%K);t.enqueue(te(n,e,l,0,N,!0))},async flush(e){const{signed:t,ctr:n,hmac:s,pending:o,ready:i}=this;await i;const c=re(o,0,o.length-N),l=re(o,o.length-N);let u=new a;if(c.length){const e=oe(X,c);s.update(e);const t=n.update(e);u=ae(X,t)}if(t){const e=re(ae(X,s.digest()),0,N);for(let t=0;N>t;t++)if(e[t]!=l[t])throw new r(B)}e.enqueue(u)}})}}class ee extends g{constructor({password:e,encryptionStrength:n}){let s;super({start(){t.assign(this,{ready:new h((e=>this.resolveReady=e)),password:e,strength:n-1,pending:new a})},async transform(e,t){const n=this,{password:s,strength:r,resolveReady:o,ready:i}=n;let c=new a;s?(c=await(async(e,t,n)=>{const s=H(new a(P[t]));return se(s,await ne(e,t,n,s))})(n,r,s),o()):await i;const l=new a(c.length+e.length-e.length%K);l.set(c,0),t.enqueue(te(n,e,l,c.length,0))},async flush(e){const{ctr:t,hmac:n,pending:r,ready:o}=this;await o;let i=new a;if(r.length){const e=t.update(oe(X,r));n.update(e),i=ae(X,e)}s.signature=ae(X,n.digest()).slice(0,N),e.enqueue(se(i,s.signature))}}),s=this}}function te(e,t,n,s,r,o){const{ctr:i,hmac:c,pending:l}=e,u=t.length-r;let h;for(l.length&&(t=se(l,t),n=((e,t)=>{if(t&&t>e.length){const n=e;(e=new a(t)).set(n,0)}return e})(n,u-u%K)),h=0;u-K>=h;h+=K){const e=oe(X,re(t,h,h+K));o&&c.update(e);const r=i.update(e);o||c.update(r),n.set(ae(X,r),h+s)}return e.pending=re(t,h),n}async function ne(n,s,r,o){n.password=null;const i=(e=>{if(void 0===f){const t=new a((e=unescape(encodeURIComponent(e))).length);for(let n=0;n<t.length;n++)t[n]=e.charCodeAt(n);return t}return(new f).encode(e)})(r),c=await(async(e,t,n,s,r)=>{if(!Y)return R.importKey(t);try{return await G.importKey("raw",t,n,!1,r)}catch(e){return Y=!1,R.importKey(t)}})(0,i,x,0,E),l=await(async(e,t,n)=>{if(!Z)return R.pbkdf2(t,e.salt,T.iterations,n);try{return await G.deriveBits(e,t,n)}catch(s){return Z=!1,R.pbkdf2(t,e.salt,T.iterations,n)}})(t.assign({salt:o},T),c,8*(2*M[s]+2)),u=new a(l),h=oe(X,re(u,0,M[s])),p=oe(X,re(u,M[s],2*M[s])),d=re(u,2*M[s]);return t.assign(n,{keys:{key:h,authentication:p,passwordVerification:d},ctr:new J(new j(h),e.from(U)),hmac:new Q(p)}),d}function se(e,t){let n=e;return e.length+t.length&&(n=new a(e.length+t.length),n.set(e,0),n.set(t,e.length)),n}function re(e,t,n){return e.subarray(t,n)}function ae(e,t){return e.fromBits(t)}function oe(e,t){return e.toBits(t)}class ie extends g{constructor({password:e,passwordVerification:n}){super({start(){t.assign(this,{password:e,passwordVerification:n}),he(this,e)},transform(e,t){const n=this;if(n.password){const t=le(n,e.subarray(0,12));if(n.password=null,t[11]!=n.passwordVerification)throw new r(q);e=e.subarray(12)}t.enqueue(le(n,e))}})}}class ce extends g{constructor({password:e,passwordVerification:n}){super({start(){t.assign(this,{password:e,passwordVerification:n}),he(this,e)},transform(e,t){const n=this;let s,r;if(n.password){n.password=null;const t=H(new a(12));t[11]=n.passwordVerification,s=new a(e.length+t.length),s.set(ue(n,t),0),r=12}else s=new a(e.length),r=0;s.set(ue(n,e),r),t.enqueue(s)}})}}function le(e,t){const n=new a(t.length);for(let s=0;s<t.length;s++)n[s]=pe(e)^t[s],fe(e,n[s]);return n}function ue(e,t){const n=new a(t.length);for(let s=0;s<t.length;s++)n[s]=pe(e)^t[s],fe(e,t[s]);return n}function he(e,n){const s=[305419896,591751049,878082192];t.assign(e,{keys:s,crcKey0:new S(s[0]),crcKey2:new S(s[2])});for(let t=0;t<n.length;t++)fe(e,n.charCodeAt(t))}function fe(e,t){let[n,r,a]=e.keys;e.crcKey0.append([t]),n=~e.crcKey0.get(),r=ge(s.imul(ge(r+de(n)),134775813)+1),e.crcKey2.append([r>>>24]),a=~e.crcKey2.get(),e.keys=[n,r,a]}function pe(e){const t=2|e.keys[2];return de(s.imul(t,1^t)>>>8)}function de(e){return 255&e}function ge(e){return 4294967295&e}const we="deflate-raw";class ye extends g{constructor(e,{chunkSize:t,CompressionStream:n,CompressionStreamNative:s}){super({});const{compressed:r,encrypted:a,useCompressionStream:o,zipCrypto:i,signed:c,level:l}=e,h=this;let f,p,d=_e(super.readable);a&&!i||!c||([d,f]=d.tee(),f=Se(f,new k)),r&&(d=ve(d,o,{level:l,chunkSize:t},s,n)),a&&(i?d=Se(d,new ce(e)):(p=new ee(e),d=Se(d,p))),be(h,d,(async()=>{let e;a&&!i&&(e=p.signature),a&&!i||!c||(e=await f.getReader().read(),e=new u(e.value.buffer).getUint32(0)),h.signature=e}))}}class me extends g{constructor(e,{chunkSize:t,DecompressionStream:n,DecompressionStreamNative:s}){super({});const{zipCrypto:a,encrypted:o,signed:i,signature:c,compressed:l,useCompressionStream:h}=e;let f,p,d=_e(super.readable);o&&(a?d=Se(d,new ie(e)):(p=new $(e),d=Se(d,p))),l&&(d=ve(d,h,{chunkSize:t},s,n)),o&&!a||!i||([d,f]=d.tee(),f=Se(f,new k)),be(this,d,(async()=>{if((!o||a)&&i){const e=await f.getReader().read(),t=new u(e.value.buffer);if(c!=t.getUint32(0,!1))throw new r(B)}}))}}function _e(e){return Se(e,new g({transform(e,t){e&&e.length&&t.enqueue(e)}}))}function be(e,n,s){n=Se(n,new g({flush:s})),t.defineProperty(e,"readable",{get:()=>n})}function ve(e,t,n,s,r){try{e=Se(e,new(t&&s?s:r)(we,n))}catch(s){if(!t)throw s;e=Se(e,new r(we,n))}return e}function Se(e,t){return e.pipeThrough(t)}const ke="data";class De extends g{constructor(e,n){super({});const s=this,{codecType:r}=e;let a;r.startsWith("deflate")?a=ye:r.startsWith("inflate")&&(a=me);let o=0;const i=new a(e,n),c=super.readable,l=new g({transform(e,t){e&&e.length&&(o+=e.length,t.enqueue(e))},flush(){const{signature:e}=i;t.assign(s,{signature:e,size:o})}});t.defineProperty(s,"readable",{get:()=>c.pipeThrough(i).pipeThrough(l)})}}const ze=new l,Ce=new l;let Ie=0;async function Re(e){try{const{options:t,scripts:s,config:r}=e;s&&s.length&&importScripts.apply(void 0,s),self.initCodec&&self.initCodec(),r.CompressionStreamNative=self.CompressionStream,r.DecompressionStreamNative=self.DecompressionStream,self.Deflate&&(r.CompressionStream=new b(self.Deflate)),self.Inflate&&(r.DecompressionStream=new b(self.Inflate));const a={highWaterMark:1,size:()=>r.chunkSize},o=e.readable||new w({async pull(e){const t=new h((e=>ze.set(Ie,e)));Ae({type:"pull",messageId:Ie}),Ie=(Ie+1)%n.MAX_SAFE_INTEGER;const{value:s,done:r}=await t;e.enqueue(s),r&&e.close()}},a),i=e.writable||new y({async write(e){let t;const s=new h((e=>t=e));Ce.set(Ie,t),Ae({type:ke,value:e,messageId:Ie}),Ie=(Ie+1)%n.MAX_SAFE_INTEGER,await s}},a),c=new De(t,r);await o.pipeThrough(c).pipeTo(i,{preventAbort:!0});try{await i.close()}catch(e){}const{signature:l,size:u}=c;Ae({type:"close",result:{signature:l,size:u}})}catch(e){qe(e)}}function Ae(e){let{value:t}=e;if(t)if(t.length)try{t=new a(t),e.value=t.buffer,d(e,[e.value])}catch(t){d(e)}else d(e);else d(e)}function qe(e){const{message:t,stack:n,code:s,name:r}=e;d({error:{message:t,stack:n,code:s,name:r}})}function Be(e,n,s){return class{constructor(r){const o=this;t.hasOwn(r,"level")&&void 0===r.level&&delete r.level,o.codec=new e(t.assign({},n,r)),s(o.codec,(e=>{if(o.pendingData){const t=o.pendingData;o.pendingData=new a(t.length+e.length);const{pendingData:n}=o;n.set(t,0),n.set(e,t.length)}else o.pendingData=new a(e)}))}append(e){return this.codec.push(e),r(this)}flush(){return this.codec.push(new a,!0),r(this)}};function r(e){if(e.pendingData){const t=e.pendingData;return e.pendingData=null,t}return new a}}addEventListener("message",(({data:e})=>{const{type:t,messageId:n,value:s,done:r}=e;try{if("start"==t&&Re(e),t==ke){const e=ze.get(n);ze.delete(n),e({value:new a(s),done:r})}if("ack"==t){const e=Ce.get(n);Ce.delete(n),e()}}catch(e){qe(e)}})),self.initCodec=()=>{const{Deflate:e,Inflate:t}=((e,t={},n)=>({Deflate:Be(e.Deflate,t.deflate,n),Inflate:Be(e.Inflate,t.inflate,n)}))(pako,{deflate:{raw:!0},inflate:{raw:!0}},((e,t)=>e.onData=t));self.Deflate=e,self.Inflate=t}}();