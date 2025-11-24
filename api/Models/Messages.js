
const MessageSchema = new mongoose.Schema({
    ChatId: { type: mongoose.Schema.Types.ObjectId, ref: "Chat", index: true },
    senderId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    text: { type: String, trim: true },

    readBy:[{
        userId: mongoose.Schema.Types.ObjectId,
        readAt: Date,
    },
],
},
 { timestamps: true });

 MessageSchema.index({ ChatId: 1, createdAt: -1 });

export const Message = mongoose.models.Message || mongoose.model("Message", MessageSchema);